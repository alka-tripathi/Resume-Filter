import OpenAI from 'openai';
import Candidate from '../models/Candidate';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
export const processResume = async (req, res) => {
  try {
    // Read resume text
    const fileText = fs.readFileSync(req.file.path, 'utf8');

    // Send to AI for skill extraction
    const aiResponse = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are an AI that extracts technical skills from resumes.',
        },
        {
          role: 'user',
          content: `Extract the main technical skills from this resume text: ${fileText}. Return as a comma-separated list.`,
        },
      ],
    });

    const skills = aiResponse.choices[0].message.content
      .split(',')
      .map((skill) => skill.trim());

    // Match against required skills
    const requiredSkills = ['JavaScript', 'React', 'Node.js'];
    const score =
      (skills.filter((s) => requiredSkills.includes(s)).length /
        requiredSkills.length) *
      100;

    // Save in MongoDB
    const candidate = await Candidate.create({
      name: req.file.originalname.replace(/\.[^/.]+$/, ''),
      skills,
      score,
    });

    res.json({ message: 'Resume processed successfully', candidate });
  } catch (err) {
    console.log('ERROR IS:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

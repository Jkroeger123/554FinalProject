import db from '../../../utils/db';

export default async (req, res) => {
  
    const { id } = req.query;
    
    try {
      let user = await db.collection('users').doc(id).get();
      res.status(200).json(user.get("displayName"));
    } catch (e) {
      res.status(400).end();
    }
}
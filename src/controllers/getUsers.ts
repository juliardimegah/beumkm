

export async function getUsersController(req: any, res: any) {
    try {
      const { db } = req.app;
  
      const result = await db.collection('user').find().toArray();
  
      res.status(200).json({
        message: "users retrieved",
        users: result
      });
  
    }
    catch(error) {
      res.status(500).json({ error: error.toString() });
    }
  }
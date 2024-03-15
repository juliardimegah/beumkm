

export async function getCustomersController(req: any, res: any) {
    try {
      const { db } = req.app;
  
      const result = await db.collection('user').find().toArray();
  
      res.status(200).json({
        message: "User retrieved",
        customers: result
      });
  
    }
    catch(error) {
      res.status(500).json({ error: error.toString() });
    }
  }
  
  export async function createUserController(req: any, res: any) {
    try {
      const { db } = req.app;
  
      const { name, email, password } = req.body;
  
      if (!name) {
        return res.status(400).json({ message: 'Name is required' });
      }
  
      if (!email) {
        return res.status(400).json({ message: 'Email is required' });
      }
  
      if (password && password.length < 8) {
        return res.status(400).json({ message: 'Password cannot be less than 8 characters' });
      }
  
      // check if customer exists
  
      const existingCustomer = await db.collection('user').findOne({
        email: email.toLowerCase()
      });
  
      if (existingCustomer) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const result = await db.collection('user').insertOne({
        name,
        email: email.toLowerCase(),
        password
      });
  
      if (result.acknowledged) {
        res.status(200).json({ message: 'User created' });
      } else {
        throw new Error('User not created');
      }
  
    }
    catch(error) {
      res.status(500).json({ error: error.toString() });
    }
  }
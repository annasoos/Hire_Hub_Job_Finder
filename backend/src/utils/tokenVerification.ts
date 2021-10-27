import jwt from 'jsonwebtoken';
export const APP_SECRET = 'Secret-code';

const getTokenPayload = (token:string) => {
	let userId: number | null = null;
  jwt.verify(token, APP_SECRET, (err, decoded) => {
		if (decoded) {
			userId = decoded.userId
		}
	});
	return userId
}

export const getUserId = (req:any) => {
	if (req) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      if (!token) {
        throw new Error('No token found');
      }
      const userId = getTokenPayload(token);
      return userId;
    }
  } else throw new Error('Not authenticated');
}
```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // This is a Next.js API route that returns JSON data.
  res.status(200).json({ text: 'Hello' });
}
```
This API route will work fine in Next.js 13 and below. However, in Next.js 15, it might cause a build error if you use the `app` directory. This is because the `app` directory introduces new routing conventions that might conflict with the traditional `pages/api` routes.
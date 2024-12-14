```javascript
// app/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello from app directory!' });
}
```
By moving the API route into the `app` directory, we align it with the new routing conventions and avoid conflicts with the `pages` directory. This solves the problem and ensures compatibility with Next.js 15's `app` directory.
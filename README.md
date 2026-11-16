# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Updating the CARLUKZ gallery

1. Put the photo in `public/images/gallery/` (e.g. `my-car.jpg`).
2. Add one entry to `src/data/gallery.js`:
   `{ src: "/images/gallery/my-car.jpg", title: "My Car", category: "Luxury Cars", alt: "Describe the photo", size: "normal" }`
   - `size` can be `"wide"`, `"tall"` or `"normal"`.
3. To replace an existing photo, overwrite the file with the same name, or change its `src`.

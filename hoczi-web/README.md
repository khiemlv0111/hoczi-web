This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


ssh ubuntu@13.215.162.35


continue text to speech function at app/studies/text-to-speech/TextToSpeechPage.tsx, user input text, submit to call api UserService.textToSpeech
hàm upload file handleSave app/studies/text-to-speech/TextToSpeechPage.tsx line 25 chỉ có 2MB nhưng vẫn bị lỗi vượt quá size, tao nhớ có chỗ upload file (handlePdfUpload) lớn được mà, mày check và fix lỗi này 
Hiện tại text input đang giới hạn 1000 ký tự, mày tăng lên 10000 ký tự đi, tăng high của textarea lên 150px nữa 

đây là response data của trang audio content list, hãy display list,
Hãy display list, có title, content, click vào title chuyển sang trang app/studies/text-to-speech/speech-detail, trong trang detail này hãy display content và audio player

# Next.js 14 & React - The Complete Guide

## Bonus: Storing Uploaded Images In The Cloud (AWS S3)

As explained earlier, storing uploaded files (or any other files that are generated at runtime) on the local filesystem is not recommended - those files will not be available in the running Next.js applications.

Instead, it's recommended to store such files (e.g., uploaded images) via cloud file storage services like **AWS S3**.

**AWS S3** is a service provided by AWS that allows you to store and serve (depending on configuration) files. You can get started with this service for free, but you should check its pricing to avoid any surprises.

This guide explains how to use AWS S3 to store uploaded user images and serve them on a Next.js website.

### 1. Create an AWS Account

To use **AWS S3**, you need an AWS account. [Create one here](https://aws.amazon.com/).

### 2. Create an S3 Bucket

Once your account is created and you’ve logged in, navigate to the **S3 Console** to create a "bucket". 

Buckets are containers to store files. Each bucket must have a globally unique name. You could name it something like `<your-name>-nextjs-demo-users-image`.

Example used here: `maxschwarzmueller-nextjs-demo-users-image`.

You can confirm the default settings while creating the bucket, ensuring the name is set.

### 3. Upload Dummy Image Files

After creating the bucket, upload some dummy images that were previously stored locally in the `public/images` folder of your Next.js project. 

1. Select your created bucket.
2. Click the "Upload" button.
3. Drag and drop the images into the upload box and confirm the upload.

### 4. Configure the Bucket for Image Access

To load the images from the Next.js website, you need to configure the bucket. By default, **S3 buckets are locked** for public access.

To make the images accessible:
1. Go to the **Permissions** tab in your bucket.
2. Edit the **Block public access** setting and disable the "Block all public access" checkbox.
3. Save the changes and type "confirm" when prompted.

Next, you need to add a **Bucket Policy** to manage object permissions. Here is an example policy:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicRead",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject",
                "s3:GetObjectVersion"
            ],
            "Resource": [
                "arn:aws:s3:::DOC-EXAMPLE-BUCKET/*"
            ]
        }
    ]
}
```
Replace `DOC-EXAMPLE-BUCKET` with your bucket name.

### 5. Update Next.js Code to Use S3 Images

Now that the images are served via S3, update the Next.js app to load them.

- Delete the `public/images` folder.
- Update your `initdb.js` to change image paths like `image: '/images/burger.jpg'` to `image: 'burger.jpg'`.

Then, in the `components/meals/meal-item.js` file, update the `<Image>` component’s `src`:

```jsx
<Image
  src={`https://your-bucket-name.s3.amazonaws.com/${image}`}
  alt={title}
  fill
/>
```

Similarly, update the `app/meals/[mealSlug]/page.js` file with the new image source:

```jsx
<Image
  src={`https://your-bucket-name.s3.amazonaws.com/${meal.image}`}
  alt={meal.title}
  fill
/>
```

### 6. Configure Next.js for External Image URLs

By default, Next.js does not allow external URLs for the `<Image>` component. You need to whitelist your S3 URL in `next.config.js`:

```js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-bucket-name.s3.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
};
```

### 7. Storing Uploaded Images on S3

To upload user-generated images to S3, install the **@aws-sdk/client-s3** package:

```bash
npm install @aws-sdk/client-s3
```

In `lib/meals.js`, initialize the **S3 client**:

```js
import { S3 } from '@aws-sdk/client-s3';

const s3 = new S3({ region: 'us-east-1' });
```

Update the `saveMeal()` function to store the image in S3:

```js
s3.putObject({
  Bucket: 'your-bucket-name',
  Key: fileName,
  Body: Buffer.from(bufferedImage),
  ContentType: meal.image.type,
});
```

### 8. Grant AWS Access Permissions to Your Next.js App

Create an `.env.local` file in your project root with your AWS credentials:

```
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-access-key
```

Set these keys by visiting AWS console > Security Credentials > Access Keys.

After this, your Next.js app should be able to upload images to S3 and display them in production.

---

You can now see uploaded images on the `/meals` page!

For detailed code, check the attached example files.

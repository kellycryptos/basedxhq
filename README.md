# BasedX HQ - Web3 Marketing Agency Website

A professional, production-ready Web3 marketing agency website built with Next.js 14, featuring a modern design, responsive navigation, and functional contact system.

## 🚀 Features

- **Modern Web3 Design**: Dark theme with gradient accents and professional styling
- **Responsive Navigation**: Sticky navbar with mobile hamburger menu
- **Functional Contact System**: Email delivery via Nodemailer API
- **SEO Optimized**: Proper metadata, Open Graph tags, and Twitter cards
- **Production Ready**: Clean codebase ready for Vercel deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with custom dark theme
- **Email**: Nodemailer for contact form delivery
- **Icons**: Lucide React
- **Deployment**: Vercel optimized

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Email API endpoint
│   ├── about/
│   │   ├── page.tsx              # About page
│   │   └── metadata.ts           # SEO metadata
│   ├── case-studies/
│   │   ├── page.tsx              # Case studies page
│   │   └── metadata.ts           # SEO metadata
│   ├── contact/
│   │   ├── page.tsx              # Contact page with form
│   │   └── metadata.ts           # SEO metadata
│   ├── services/
│   │   ├── page.tsx              # Services page
│   │   └── metadata.ts           # SEO metadata
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
└── components/
    └── Layout.tsx                # Shared layout component
```

## 🚀 Deployment

### Vercel Deployment

1. **Push to GitHub**:
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Import your GitHub repository
   - Vercel will automatically detect the Next.js project

3. **Set Environment Variables**:
   In your Vercel project settings, add these environment variables:
   ```
   EMAIL_USER=your-gmail-address@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_TO=basedhq0@gmail.com
   ```

### Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Create environment file**:
   ```bash
   cp .env.local.example .env.local
   ```
   Then edit `.env.local` with your email credentials.

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## 📧 Email Setup

### Gmail Configuration

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
3. **Configure Environment Variables**:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=the-16-character-app-password
   EMAIL_TO=basedhq0@gmail.com
   ```

### Custom SMTP

For other email providers, modify the SMTP configuration in `src/app/api/contact/route.ts`:

```typescript
const transporter = nodemailer.createTransporter({
  host: process.env.EMAIL_HOST || 'smtp.your-provider.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## 🎨 Customization

- **Branding**: Update colors in `tailwind.config.ts`
- **Content**: Modify page content in respective `page.tsx` files
- **Navigation**: Edit menu items in `src/components/Layout.tsx`
- **SEO**: Update metadata in each page's `metadata.ts` file

## 📱 Responsive Design

The website is fully responsive with:
- Desktop: Horizontal navigation menu
- Mobile: Hamburger menu with slide-down animation
- Tablet: Adaptive layout with appropriate breakpoints

## 🔧 Development Notes

- Uses Next.js App Router for optimal performance
- Client-side form handling with React hooks
- Server-side email processing with API routes
- Proper TypeScript typing throughout
- ESLint and Prettier for code quality

## 📄 License

This project is licensed under the MIT License.
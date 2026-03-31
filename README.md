# Krishna Bhatt - Portfolio Website

A professional portfolio website for Krishna Bhatt, Full Stack Java Developer with 5+ years of experience.

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices (mobile, tablet, desktop)
- **Modern UI** - Clean and professional design with smooth animations
- **Bootstrap 5** - Built with the latest Bootstrap framework
- **Smooth Scrolling** - Seamless navigation between sections
- **Animated Elements** - AOS (Animate On Scroll) library for engaging animations
- **Contact Form** - Functional contact form for potential employers/clients
- **Skills Showcase** - Interactive skill bars showing proficiency levels
- **Project Portfolio** - Featured projects with detailed descriptions
- **Work Experience Timeline** - Professional work history display

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── style.css           # Custom CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
└── src/
    └── imports/
        └── Krishna_Bhatt.pdf    # Resume/CV file
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with modern features
- **JavaScript (ES6+)** - Interactive functionality
- **Bootstrap 5.3.2** - Responsive framework
- **Bootstrap Icons** - Icon library
- **AOS Library** - Scroll animations

## 📦 Installation & Setup

### Option 1: Direct Download

1. Download all files to your computer
2. Make sure all files are in the same folder
3. Open `index.html` in your web browser

### Option 2: Using Live Server (Recommended for Development)

1. Install [Visual Studio Code](https://code.visualstudio.com/)
2. Install the "Live Server" extension
3. Open the project folder in VS Code
4. Right-click on `index.html` and select "Open with Live Server"

## 🌐 Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right and select "New repository"
3. Name your repository (e.g., `portfolio` or `your-username.github.io`)
4. Keep it **Public**
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Upload Your Files

**Method A: Using GitHub Web Interface (Easiest)**

1. In your new repository, click "uploading an existing file"
2. Drag and drop all your files (index.html, style.css, script.js, README.md)
3. Create a folder structure: create `src/imports/` folder and upload your PDF
4. Add a commit message like "Initial commit"
5. Click "Commit changes"

**Method B: Using Git Command Line**

```bash
# Navigate to your project folder
cd path/to/your/portfolio

# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit"

# Add remote repository (replace YOUR-USERNAME and REPOSITORY-NAME)
git remote add origin https://github.com/YOUR-USERNAME/REPOSITORY-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. In your repository, go to **Settings**
2. Scroll down to **Pages** (left sidebar)
3. Under "Source", select **main** branch
4. Select **/ (root)** folder
5. Click **Save**
6. Wait 1-2 minutes for deployment

### Step 4: Access Your Website

Your website will be available at:
- `https://your-username.github.io/repository-name/`
- Or if you named it `your-username.github.io`, just: `https://your-username.github.io/`

## ✏️ Customization Guide

### Update Personal Information

Open `index.html` and modify:

**Contact Information (Around lines 40-50):**
```html
<a href="mailto:your-email@example.com">your-email@example.com</a>
<a href="tel:+1XXXXXXXXXX">+1 (XXX) XXX-XXXX</a>
```

**Social Media Links (Around lines 55-65):**
```html
<a href="https://github.com/your-username" target="_blank">
<a href="https://linkedin.com/in/your-profile" target="_blank">
```

### Update Skills

Find the Skills section in `index.html` (around line 200) and modify:
```html
<div class="skill-item mb-3">
    <div class="d-flex justify-content-between mb-2">
        <span>Your Skill</span>
        <span class="text-primary fw-semibold">85%</span>
    </div>
    <div class="progress">
        <div class="progress-bar" style="width: 85%"></div>
    </div>
</div>
```

### Update Work Experience

Find the Experience section (around line 350) and modify the timeline items.

### Update Projects

Find the Projects section (around line 450) and update project details, images, and links.

### Change Colors

Open `style.css` and modify the color variables at the top:
```css
:root {
    --primary-color: #0d6efd;  /* Change to your preferred color */
    --purple-color: #7c3aed;   /* Change to your preferred color */
}
```

### Add Your Resume

1. Replace `src/imports/Krishna_Bhatt.pdf` with your own PDF resume
2. Update the download link in `index.html`:
```html
<a href="src/imports/YOUR_RESUME.pdf" download>Download CV</a>
```

## 📱 Testing

Test your website on:
- ✅ Desktop browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile devices (iPhone, Android)
- ✅ Tablets (iPad, Android tablets)
- ✅ Different screen sizes

## 🐛 Troubleshooting

### Images not loading?
- Check that image URLs are correct
- Make sure you have internet connection (for external images)

### Animations not working?
- Check browser console for JavaScript errors
- Make sure AOS library is loading properly

### Form not submitting?
- The form currently shows an alert message
- To make it functional, you need to add a backend service (like Formspree, EmailJS, or custom server)

## 📧 Contact Form Integration (Optional)

To make the contact form send real emails:

### Option 1: Formspree (Free & Easy)
1. Go to [Formspree.io](https://formspree.io/)
2. Create a free account
3. Get your form endpoint
4. Update the form in `index.html`:
```html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

### Option 2: EmailJS (Free)
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Create account and set up email service
3. Add EmailJS SDK to your HTML
4. Update JavaScript to send emails

## 🚀 Performance Optimization

- All images are optimized from Unsplash
- CSS and JS are minified (you can minify further with tools)
- Uses CDN for Bootstrap and icons
- Implements lazy loading for images

## 📄 License

This project is open source and available for personal use. Feel free to customize it for your own portfolio!

## 🤝 Support

If you have any questions or need help:
- Check the code comments in each file
- Search for solutions on Stack Overflow
- Contact: krishna.bhatt@example.com

## 🎉 Credits

- **Bootstrap** - Front-end framework
- **AOS Library** - Scroll animations
- **Bootstrap Icons** - Icon library
- **Unsplash** - Stock images

---

**Built with ❤️ by Krishna Bhatt**

Good luck with your portfolio! 🚀

const aboutUse = `
About Hoczi

Hoczi is an innovative online learning platform built to make education more engaging, interactive, and accessible for students, teachers, and educational organizations.

Our mission is to transform traditional learning into a smarter digital experience by combining structured education tools with gamified learning, quizzes, assignments, and classroom management in one unified platform.

What We Offer
For Students
Practice quizzes anytime, anywhere
Track learning progress and performance
Complete assignments digitally
Receive feedback from teachers instantly
Learn through engaging and interactive content
For Teachers
Create and manage quizzes, lessons, and assignments
Build question banks for personalized teaching
Organize students into classes
Track student progress and performance
Manage schedules and classroom activities efficiently
For Schools & Organizations
Multi-tenant support for managing multiple schools/organizations
Role-based access for owners, teachers, and students
Centralized academic management system
Scalable architecture for institutions of any size
Our Vision

We believe education should be:

Accessible — Available to everyone, anywhere
Interactive — More engaging than traditional methods
Personalized — Adaptable to each learner’s pace and needs
Scalable — Suitable for individuals, classrooms, and institutions

Hoczi aims to become a comprehensive digital learning ecosystem that empowers educators and inspires learners worldwide.

Why Hoczi?
Modern and intuitive user experience
Built for both individual learners and institutions
Flexible quiz and assignment system
Designed for scalability and future AI integration
Focused on improving learning outcomes through technology
Our Commitment

At Hoczi, we are committed to continuously innovating and improving our platform to meet the evolving needs of modern education.

We are building more than just a learning platform — we are building the future of education.

`;
export function AboutPage() {
    return (
        <div className="container mt-10 px-4 sm:px-0">
            <div className="bg-white rounded-xl border border-gray-200 p-6">
                <section className="about-hoczi">
                    <h1>About Hoczi</h1>

                    <p>
                        Hoczi is an innovative online learning platform built to make education more
                        engaging, interactive, and accessible for students, teachers, and educational
                        organizations.
                    </p>

                    <p>
                        Our mission is to transform traditional learning into a smarter digital
                        experience by combining structured education tools with gamified learning,
                        quizzes, assignments, and classroom management in one unified platform.
                    </p>

                    <h2>What We Offer</h2>

                    <h3>For Students</h3>
                    <ul>
                        <li>Practice quizzes anytime, anywhere</li>
                        <li>Track learning progress and performance</li>
                        <li>Complete assignments digitally</li>
                        <li>Receive feedback from teachers instantly</li>
                        <li>Learn through engaging and interactive content</li>
                    </ul>

                    <h3>For Teachers</h3>
                    <ul>
                        <li>Create and manage quizzes, lessons, and assignments</li>
                        <li>Build question banks for personalized teaching</li>
                        <li>Organize students into classes</li>
                        <li>Track student progress and performance</li>
                        <li>Manage schedules and classroom activities efficiently</li>
                    </ul>

                    <h3>For Schools &amp; Organizations</h3>
                    <ul>
                        <li>Multi-tenant support for managing multiple schools and organizations</li>
                        <li>Role-based access for owners, teachers, and students</li>
                        <li>Centralized academic management system</li>
                        <li>Scalable architecture for institutions of any size</li>
                    </ul>

                    <h2>Our Vision</h2>

                    <p>We believe education should be:</p>

                    <ul>
                        <li><strong>Accessible</strong> — available to everyone, anywhere</li>
                        <li><strong>Interactive</strong> — more engaging than traditional methods</li>
                        <li><strong>Personalized</strong> — adaptable to each learner’s pace and needs</li>
                        <li><strong>Scalable</strong> — suitable for individuals, classrooms, and institutions</li>
                    </ul>

                    <p>
                        Hoczi aims to become a comprehensive digital learning ecosystem that empowers
                        educators and inspires learners worldwide.
                    </p>

                    <h2>Why Hoczi?</h2>

                    <ul>
                        <li>Modern and intuitive user experience</li>
                        <li>Built for both individual learners and institutions</li>
                        <li>Flexible quiz and assignment system</li>
                        <li>Designed for scalability and future AI integration</li>
                        <li>Focused on improving learning outcomes through technology</li>
                    </ul>

                    <h2>Our Commitment</h2>

                    <p>
                        At Hoczi, we are committed to continuously innovating and improving our
                        platform to meet the evolving needs of modern education.
                    </p>

                    <p>
                        We are building more than just a learning platform — we are building the
                        future of education.
                    </p>
                </section>

            </div>
        </div>
    );
}
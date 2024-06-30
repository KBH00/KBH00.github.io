/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/fdmOD8QXiGG
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { IBM_Plex_Sans } from 'next/font/google'
import { Rubik } from 'next/font/google'

ibm_plex_sans({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"

export function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">John Doe</h1>
            <p className="text-lg">Software Engineer</p>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Experience
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Skills
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Projects
            </Link>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden" aria-label="Toggle navigation menu">
            <MenuIcon className="h-6 w-6" />
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section id="about" className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">About Me</h2>
                <p className="text-muted-foreground">
                  I am a passionate software engineer with a strong background in full-stack web development. I have
                  experience working with a variety of technologies and frameworks, and I am always eager to learn new
                  skills.
                </p>
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Education</h3>
                  <div>
                    <h4 className="text-lg font-bold">Bachelor of Science in Computer Science</h4>
                    <p className="text-muted-foreground">University of Example | 2015 - 2019</p>
                    <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                      <li>Graduated with a 3.8 GPA</li>
                      <li>Participated in the Computer Science Club and hackathons</li>
                      <li>Completed coursework in data structures, algorithms, and software engineering</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img src="/placeholder.svg" width="300" height="300" alt="John Doe" className="rounded-full" />
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="py-12 md:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold">Software Engineer</h3>
                <p className="text-muted-foreground">Acme Inc. | 2019 - Present</p>
                <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                  <li>Developed and maintained web applications using React, Node.js, and MongoDB</li>
                  <li>Collaborated with cross-functional teams to design and implement new features</li>
                  <li>Participated in code reviews and pair programming sessions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold">Web Developer Intern</h3>
                <p className="text-muted-foreground">Widgets Inc. | 2018 - 2019</p>
                <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                  <li>Assisted in the development and maintenance of company website</li>
                  <li>Gained experience in HTML, CSS, and JavaScript</li>
                  <li>Participated in weekly team meetings and presentations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="skills" className="py-12 md:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Node.js</Badge>
              <Badge variant="secondary">MongoDB</Badge>
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">HTML/CSS</Badge>
              <Badge variant="secondary">Git</Badge>
              <Badge variant="secondary">SQL</Badge>
              <Badge variant="secondary">Agile</Badge>
              <Badge variant="secondary">Test Driven Development</Badge>
            </div>
          </div>
        </section>
        <section id="projects" className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <Link href="#" className="group" prefetch={false}>
                <Card className="h-full">
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      width="400"
                      height="225"
                      alt="Project 1"
                      className="rounded-t-md object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold mb-2">Project 1</h3>
                    <p className="text-muted-foreground">
                      A full-stack web application built with React, Node.js, and MongoDB.
                    </p>
                  </CardContent>
                  <CardFooter className="pt-4">
                    <Button variant="link" className="group-hover:underline">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
              <Link href="#" className="group" prefetch={false}>
                <Card className="h-full">
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      width="400"
                      height="225"
                      alt="Project 2"
                      className="rounded-t-md object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold mb-2">Project 2</h3>
                    <p className="text-muted-foreground">A mobile app built with React Native and Firebase.</p>
                  </CardContent>
                  <CardFooter className="pt-4">
                    <Button variant="link" className="group-hover:underline">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
              <Link href="#" className="group" prefetch={false}>
                <Card className="h-full">
                  <CardHeader>
                    <img
                      src="/placeholder.svg"
                      width="400"
                      height="225"
                      alt="Project 3"
                      className="rounded-t-md object-cover"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-bold mb-2">Project 3</h3>
                    <p className="text-muted-foreground">A desktop application built with Electron and React.</p>
                  </CardContent>
                  <CardFooter className="pt-4">
                    <Button variant="link" className="group-hover:underline">
                      Learn More
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-4 md:px-6">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm">&copy; 2024 John Doe</p>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              LinkedIn
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

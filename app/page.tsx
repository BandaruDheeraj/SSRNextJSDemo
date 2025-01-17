import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GithubIcon, GraduationCap, Linkedin } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dheeraj Bandaru | Portfolio',
  description: 'Personal portfolio website of Dheeraj Bandaru - Research, Projects, and Professional Experience',
  openGraph: {
    title: 'Dheeraj Bandaru | Portfolio',
    description: 'Personal portfolio website of Dheeraj Bandaru - Research, Projects, and Professional Experience',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 text-center space-y-4 bg-gradient-to-b from-primary/10 to-background">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Dheeraj Bandaru
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px] mx-auto px-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Researcher • Developer • Innovator
        </p>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button
            variant="outline"
            size="lg"
            className="group"
            asChild
          >
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="space-x-2"
            >
              <GraduationCap className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Google Scholar</span>
            </a>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="group"
            asChild
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="space-x-2"
            >
              <GithubIcon className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>GitHub</span>
            </a>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="group"
            asChild
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="space-x-2"
            >
              <Linkedin className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>LinkedIn</span>
            </a>
          </Button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold">Research</h3>
            <p className="text-muted-foreground">
              Exploring cutting-edge technologies and methodologies in computer science and artificial intelligence.
            </p>
          </Card>
          
          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold">Projects</h3>
            <p className="text-muted-foreground">
              Building innovative solutions and contributing to open-source communities.
            </p>
          </Card>
          
          <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold">Publications</h3>
            <p className="text-muted-foreground">
              Sharing knowledge through academic papers and technical articles.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
}
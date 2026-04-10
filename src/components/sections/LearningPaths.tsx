import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import Button from '../ui/Button'

export default function LearningPaths() {
  const paths = [
    {
      title: 'Become a Frontend Developer',
      steps: [
        'HTML & CSS',
        'JavaScript ES6+',
        'React & Next.js',
        'UI/UX Design',
        'Portfolio Projects'
      ],
      icon: '🎨'
    },
    {
      title: 'Become a Backend Developer',
      steps: [
        'Python Fundamentals',
        'Databases & SQL',
        'REST APIs',
        'Node.js & Express',
        'DevOps & Deployment'
      ],
      icon: '⚙️'
    },
  ]
  
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <SectionTitle
            label="Learning Paths"
            title="Choose Your Path"
            subtitle="Follow structured roadmaps to become a professional developer."
            centered
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {paths.map((path, index) => (
            <Card key={index} className="p-8">
              <div className="text-5xl mb-6">{path.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {path.title}
              </h3>
              <ol className="space-y-3 mb-8">
                {path.steps.map((step, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-semibold">
                      {i + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
              <Button variant="outline" className="w-full" href="#register">
                Start Path
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

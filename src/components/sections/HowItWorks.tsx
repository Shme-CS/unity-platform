import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Sign Up',
      description: 'Create your free account in seconds',
      icon: '✍️'
    },
    {
      number: 2,
      title: 'Enroll',
      description: 'Browse and join courses that interest you',
      icon: '📚'
    },
    {
      number: 3,
      title: 'Learn & Practice',
      description: 'Watch lessons, take quizzes, build projects',
      icon: '💡'
    },
    {
      number: 4,
      title: 'Complete Projects',
      description: 'Submit real projects via GitHub',
      icon: '🚀'
    },
    {
      number: 5,
      title: 'Get Certified',
      description: 'Earn certificates and level up',
      icon: '🏆'
    },
  ]
  
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <SectionTitle
            label="How It Works"
            title="Your Learning Journey"
            subtitle="From sign up to certification in 5 simple steps."
            centered
          />
        </div>
        
        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-4xl">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full border-2 border-indigo-600 flex items-center justify-center font-bold text-indigo-600 text-sm">
                  {step.number}
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

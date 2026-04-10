import Container from '../ui/Container'
import Button from '../ui/Button'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <div className="w-20 h-20 mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Start Your Journey Today<br />with CTC Club
          </h2>
          
          <p className="text-lg text-indigo-100 mb-8">
            Join thousands of students who are building their tech careers with us.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" href="#register">
              Register Now
            </Button>
            <Button size="lg" variant="outline" href="#courses" className="border-white text-white hover:bg-white/10">
              Explore Courses
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

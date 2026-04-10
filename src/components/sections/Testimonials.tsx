import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "CTC Club transformed my coding skills. The structured courses and real projects helped me land my dream internship!",
      author: "Amira Hassan",
      role: "CS Senior",
      avatar: "https://images.unsplash.com/photo-1573497620166-aef748c8c792?w=80&h=80&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "The community support is incredible. Whenever I'm stuck, there's always someone ready to help. Best learning platform!",
      author: "Daniel Kim",
      role: "IT Junior",
      avatar: "https://images.unsplash.com/photo-1568880893176-fb2bdab44e41?w=80&h=80&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "Earned 3 certificates and built a portfolio that impressed every interviewer. CTC Club is a game changer!",
      author: "Sofia Rodriguez",
      role: "IS Graduate",
      avatar: "https://images.unsplash.com/photo-1752738372136-2602aaafdcb7?w=80&h=80&fit=crop&crop=face",
      rating: 5
    },
  ]
  
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <SectionTitle
            label="Student Stories"
            title="What Our Students Say"
            centered
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

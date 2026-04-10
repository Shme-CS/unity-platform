import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import Button from '../ui/Button'
import Badge from '../ui/Badge'

export default function Pricing() {
  const plans = [
    {
      name: 'Student',
      description: 'Perfect for individual learning.',
      price: '$0',
      period: '/ forever',
      features: [
        'All basic courses',
        'Community access',
        'GitHub project submissions',
        'Support tickets',
        'Certificates'
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'University Partner',
      description: 'For institutions and large clubs.',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited student accounts',
        'Custom course creation',
        'Advanced analytics',
        'Priority 24/7 support',
        'Custom branding',
        'Admin dashboard'
      ],
      cta: 'Contact Sales',
      popular: true
    },
  ]
  
  return (
    <section className="py-20 bg-gray-50" id="pricing">
      <Container>
        <div className="text-center mb-16">
          <SectionTitle
            label="Pricing"
            title="Simple, Transparent Pricing"
            subtitle="100% free for university students."
            centered
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`p-8 relative ${plan.popular ? 'border-2 border-indigo-600' : ''}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600">{plan.period}</span>}
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? 'primary' : 'outline'} 
                className="w-full" 
                size="lg"
                href="#register"
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, Users, TrendingUp, Star, Mail, Phone, Calendar } from "lucide-react"
import Link from "next/link"

export default function BusinessPartnerships() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <img src="/pottydash-logo.png" alt="PottyDash Logo" className="h-20 w-auto" />
          </Link>
          <Link href="/" className="flex items-center text-gray-600 hover:text-primary-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-primary-100 text-primary-700 hover:bg-primary-100">Business Partnerships</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Partner with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              {" "}
              PottyDash
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join thousands of businesses already benefiting from increased foot traffic and enhanced reputation through
            our platform.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-gray-600">Transform your restroom into a competitive advantage</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-primary-200">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary-600 mb-4" />
                <CardTitle>Increase Foot Traffic</CardTitle>
                <CardDescription>
                  Our users actively seek out partner locations, driving new customers to your business
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-secondary-200">
              <CardHeader>
                <Star className="w-12 h-12 text-secondary-600 mb-4" />
                <CardTitle>Build Your Reputation</CardTitle>
                <CardDescription>
                  Showcase your commitment to cleanliness and customer care through verified ratings
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-primary-200">
              <CardHeader>
                <Users className="w-12 h-12 text-primary-600 mb-4" />
                <CardTitle>Connect with Community</CardTitle>
                <CardDescription>
                  Attract community-minded customers who value businesses that care about public amenities
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-100 to-primary-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Partnership Tiers</h2>
            <p className="text-xl text-gray-600">Choose the level that works best for your business</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Partner */}
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl">Basic Partner</CardTitle>
                <CardDescription>Perfect for small businesses</CardDescription>
                <div className="text-3xl font-bold text-primary-600">Free</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                    Basic listing on PottyDash
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                    Customer reviews and ratings
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                    Basic analytics dashboard
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary-600 hover:bg-primary-700">Get Started Free</Button>
              </CardContent>
            </Card>

            {/* Premium Partner */}
            <Card className="border-2 border-primary-300 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white">
                Most Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-2xl">Premium Partner</CardTitle>
                <CardDescription>Enhanced visibility and features</CardDescription>
                <div className="text-3xl font-bold text-primary-600">$29/month</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                    Priority listing in search results
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                    Featured business badge
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                    Advanced analytics and insights
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                    Marketing materials and support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                    Direct customer messaging
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary-600 hover:bg-primary-700">Start Premium Trial</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600">
              Contact our partnership team to learn more about how PottyDash can benefit your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Mail className="w-8 h-8 text-primary-600 mx-auto mb-4" />
                <CardTitle>Email Us</CardTitle>
                <CardDescription>Get detailed information via email</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  partners@pottydash.com
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Phone className="w-8 h-8 text-secondary-600 mx-auto mb-4" />
                <CardTitle>Call Us</CardTitle>
                <CardDescription>Speak directly with our team</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  1-800-POTTY-DASH
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Calendar className="w-8 h-8 text-primary-600 mx-auto mb-4" />
                <CardTitle>Schedule a Demo</CardTitle>
                <CardDescription>See PottyDash in action</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  Book a Meeting
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="/pottydash-logo.png" alt="PottyDash Logo" className="h-16 w-auto" />
              <span className="text-2xl font-bold">PottyDash</span>
            </Link>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">Making bathroom emergencies less stressful, one restroom at a time.</p>
              <p className="text-gray-500 text-sm">© 2024 PottyDash. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

"use client"

import type React from "react"
import Link from "next/link"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Star,
  Users,
  Smartphone,
  Heart,
  Mail,
  Building2,
  CheckCircle,
  Clock,
  Shield,
  Accessibility,
} from "lucide-react"

export default function PottyDashWebsite() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/pottydash-logo.png" alt="PottyDash Logo" className="h-20 w-auto" />
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">
              Features
            </a>
            <a href="#partnerships" className="text-gray-600 hover:text-primary-600 transition-colors">
              Partners
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-primary-100 text-primary-700 hover:bg-primary-100">Coming Soon to App Stores</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Never Get Caught in a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">
              {" "}
              Bathroom Emergency
            </span>{" "}
            Again
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            PottyDash helps families, tourists, workers, and anyone with urgent needs find clean, accessible public
            restrooms quickly. Because when nature calls, we answer! 🚽✨
          </p>

          {/* Email Signup */}
          <div className="max-w-md mx-auto mb-8">
            {!isSubscribed ? (
              <form onSubmit={handleEmailSubmit} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email for launch updates"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" className="bg-primary-600 hover:bg-primary-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Notify Me
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center text-primary-600 font-medium">
                <CheckCircle className="w-5 h-5 mr-2" />
                {"Thanks! We'll keep you updated on our launch."}
              </div>
            )}
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gray-800 hover:bg-gray-900 text-white px-8">
              <Smartphone className="w-5 h-5 mr-2" />
              Download for iOS
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white px-8"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              Download for Android
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Features That Make the Difference</h2>
            <p className="text-xl text-gray-600">Everything you need to find the perfect pit stop</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary-200 transition-colors">
              <CardHeader>
                <MapPin className="w-12 h-12 text-primary-600 mb-4" />
                <CardTitle>Smart Location Finder</CardTitle>
                <CardDescription>
                  Powered by Google Maps to find the nearest restrooms based on your exact location
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-secondary-200 transition-colors">
              <CardHeader>
                <Star className="w-12 h-12 text-secondary-600 mb-4" />
                <CardTitle>Community Ratings</CardTitle>
                <CardDescription>
                  Real reviews from real people about cleanliness, accessibility, and availability
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary-200 transition-colors">
              <CardHeader>
                <Accessibility className="w-12 h-12 text-primary-600 mb-4" />
                <CardTitle>Accessibility Info</CardTitle>
                <CardDescription>
                  Detailed accessibility information for users with mobility needs and families with strollers
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-secondary-200 transition-colors">
              <CardHeader>
                <Clock className="w-12 h-12 text-secondary-600 mb-4" />
                <CardTitle>Real-Time Updates</CardTitle>
                <CardDescription>
                  Live information about hours, temporary closures, and maintenance schedules
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-primary-200 transition-colors">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary-600 mb-4" />
                <CardTitle>Safety & Cleanliness</CardTitle>
                <CardDescription>
                  Verified cleanliness scores and safety ratings to ensure peace of mind
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-secondary-200 transition-colors">
              <CardHeader>
                <Users className="w-12 h-12 text-secondary-600 mb-4" />
                <CardTitle>Family-Friendly</CardTitle>
                <CardDescription>
                  Special filters for family restrooms, changing stations, and kid-friendly facilities
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-100 to-primary-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Who We Help</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Heart className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Families</h3>
              <p className="text-gray-600 text-sm">Parents with young children who need quick, clean facilities</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <MapPin className="w-8 h-8 text-secondary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Tourists</h3>
              <p className="text-gray-600 text-sm">Travelers exploring new cities and unfamiliar areas</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Building2 className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Workers</h3>
              <p className="text-gray-600 text-sm">Delivery drivers, field workers, and mobile professionals</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Accessibility className="w-8 h-8 text-secondary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Everyone</h3>
              <p className="text-gray-600 text-sm">Anyone with medical needs, elderly users, or urgent situations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Partnerships */}
      <section id="partnerships" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Partner With Us</h2>
            <p className="text-xl text-gray-600">
              Join our mission to improve public restroom accessibility and cleanliness
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-primary-200">
              <CardHeader>
                <CardTitle className="text-primary-700">For Businesses</CardTitle>
                <CardDescription>Showcase your clean, accessible restrooms to thousands of users</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                    Increase foot traffic to your location
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                    Build reputation for cleanliness
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                    Connect with community-minded customers
                  </li>
                </ul>
                <Link href="/business-partnerships">
                  <Button className="w-full mt-6 bg-primary-600 hover:bg-primary-700">
                    Learn More About Business Partnerships
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary-200">
              <CardHeader>
                <CardTitle className="text-secondary-700">Clean Restroom Program</CardTitle>
                <CardDescription>Get certified as a PottyDash Clean Partner</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary-600 mr-2" />
                    Official PottyDash certification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary-600 mr-2" />
                    Priority listing in search results
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary-600 mr-2" />
                    Marketing support and materials
                  </li>
                </ul>
                <Link href="/clean-partner-program">
                  <Button className="w-full mt-6 bg-secondary-600 hover:bg-secondary-700">
                    Apply for Clean Partner Status
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Get in Touch</h2>
          <p className="text-xl text-gray-600 mb-12">
            Have questions, suggestions, or want to partner with us? {"We'd"} love to hear from you!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Mail className="w-8 h-8 text-primary-600 mx-auto mb-4" />
                <CardTitle>Email Us</CardTitle>
                <CardDescription>For general inquiries and support</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  hello@pottydash.com
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="w-8 h-8 text-secondary-600 mx-auto mb-4" />
                <CardTitle>Business Inquiries</CardTitle>
                <CardDescription>For partnerships and business opportunities</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  partners@pottydash.com
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
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="/pottydash-logo.png" alt="PottyDash Logo" className="h-16 w-auto" />
              <span className="text-2xl font-bold">PottyDash</span>
            </div>
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

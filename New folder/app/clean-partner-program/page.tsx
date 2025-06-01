"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, Shield, Award, Star, Users, TrendingUp, Mail, FileText } from "lucide-react"
import Link from "next/link"

export default function CleanPartnerProgram() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-blue-50">
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
          <Badge className="mb-6 bg-secondary-100 text-secondary-700 hover:bg-secondary-100">
            Clean Partner Program
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Become a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-600 to-secondary-800">
              {" "}
              Certified Clean Partner
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join our elite network of businesses committed to maintaining the highest standards of restroom cleanliness
            and accessibility.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What is the Clean Partner Program?</h2>
            <p className="text-xl text-gray-600">
              A certification program that recognizes businesses maintaining exceptional restroom standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-secondary-200">
              <CardHeader>
                <Shield className="w-12 h-12 text-secondary-600 mb-4" />
                <CardTitle>Rigorous Standards</CardTitle>
                <CardDescription>
                  Our certification process ensures only the cleanest, most accessible restrooms receive our seal of
                  approval
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-primary-200">
              <CardHeader>
                <Award className="w-12 h-12 text-primary-600 mb-4" />
                <CardTitle>Official Recognition</CardTitle>
                <CardDescription>
                  Display the official PottyDash Clean Partner badge both digitally and physically at your location
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-secondary-200">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-secondary-600 mb-4" />
                <CardTitle>Increased Visibility</CardTitle>
                <CardDescription>
                  Clean Partners appear first in search results and receive special highlighting in our app
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary-100 to-secondary-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Certification Requirements</h2>
            <p className="text-xl text-gray-600">Meet these standards to qualify for Clean Partner status</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-white bg-white">
              <CardHeader>
                <CardTitle className="text-secondary-700">Cleanliness Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary-600 mr-2" />
                    Daily professional cleaning schedule
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary-600 mr-2" />
                    Regular maintenance and repairs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary-600 mr-2" />
                    Adequate supplies (soap, paper, etc.)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary-600 mr-2" />
                    Proper ventilation and lighting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary-600 mr-2" />
                    Minimum 4.5-star average rating
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-white bg-white">
              <CardHeader>
                <CardTitle className="text-primary-700">Accessibility Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                    ADA compliant facilities
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                    Clear signage and directions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                    Family-friendly amenities
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                    Changing stations available
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-primary-600 mr-2" />
                    Public access during business hours
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Clean Partner Benefits</h2>
            <p className="text-xl text-gray-600">Exclusive advantages for certified partners</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-secondary-50 p-6 rounded-lg text-center">
              <Star className="w-8 h-8 text-secondary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Priority Listing</h3>
              <p className="text-gray-600 text-sm">Appear first in all search results</p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg text-center">
              <Award className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Official Badge</h3>
              <p className="text-gray-600 text-sm">Display certification badge in-app and on-site</p>
            </div>
            <div className="bg-secondary-50 p-6 rounded-lg text-center">
              <Users className="w-8 h-8 text-secondary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Marketing Support</h3>
              <p className="text-gray-600 text-sm">Free promotional materials and social media assets</p>
            </div>
            <div className="bg-primary-50 p-6 rounded-lg text-center">
              <TrendingUp className="w-8 h-8 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Increased Traffic</h3>
              <p className="text-gray-600 text-sm">Average 40% increase in foot traffic</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-100 to-primary-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600">Simple steps to become a Clean Partner</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Apply Online</h3>
              <p className="text-gray-600 text-sm">Submit your application with basic business information</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Initial Review</h3>
              <p className="text-gray-600 text-sm">Our team reviews your current ratings and feedback</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Site Inspection</h3>
              <p className="text-gray-600 text-sm">Professional inspection of your facilities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Certification</h3>
              <p className="text-gray-600 text-sm">Receive your Clean Partner status and materials</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">Ready to Apply?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Join the elite network of businesses committed to exceptional restroom standards
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <FileText className="w-8 h-8 text-secondary-600 mx-auto mb-4" />
                <CardTitle>Start Application</CardTitle>
                <CardDescription>Begin your Clean Partner application today</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-secondary-600 hover:bg-secondary-700">Apply Now</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Mail className="w-8 h-8 text-primary-600 mx-auto mb-4" />
                <CardTitle>Questions?</CardTitle>
                <CardDescription>Contact our certification team</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  cleanpartner@pottydash.com
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

import { Button, Card, CardBody, CardHeader, Link } from "@nextui-org/react";
import { FaDumbbell, FaTrophy } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import Testimonials from "@/components/home/Testimonials";
export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <main>
        <div className="sm:container mx-auto">
          <div className="sm:px-0">
            <div className="rounded-lg">
              <section className="text-center py-20 bg-zinc-800 text-white">
                <h2 className="text-4xl font-bold mb-4">Welcome to FitLife</h2>
                <p className="mb-8">Discover, Share, and Achieve Your Fitness Goals!</p>
                <Button size="lg">
                  Get Started
                </Button>
              </section>
              <section className="py-20 p-3 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                  <h3 className="text-3xl font-bold mb-6">Why FitLife?</h3>
                  <p className="mb-8">At FitLife, we are dedicated to connecting fitness enthusiasts with expert trainers and nutritionists. Whether you are looking to find the perfect workout routine, a meal plan that fits your lifestyle, or share your own success stories and plans with others, FitLife is your go-to platform.</p>
                  <div className="grid grid-cols-12 p-3 gap-3">
                    <div className="col-span-12 sm:col-span-4">
                        <Card className="p-2 sm:p-4 h-full">
                          <CardHeader className="flex flex-col items-center">
                            <FaDumbbell className="text-4xl text-zinc-900 mb-4" />
                            <p className="text-xl font-semibold">Discover</p>
                          </CardHeader>
                          <CardBody>
                            <p>Find the perfect workout routines and meal plans from experts.</p>
                          </CardBody>
                        </Card>
                    </div>
                    <div className="col-span-12 sm:col-span-4">
                      <Card className="p-2 sm:p-4 h-full">
                        <CardHeader className="flex flex-col items-center">
                          <CiShare2 className="text-4xl text-green-500 mb-4" />
                          <p className="text-xl font-semibold">Share</p>
                        </CardHeader>
                        <CardBody>
                          <p>Share your own routines and plans with the community.</p>
                        </CardBody>
                      </Card>
                    </div>
                    <div className="col-span-12 sm:col-span-4">
                      <Card className="p-2 sm:p-4 h-full">
                        <CardHeader className="flex flex-col items-center">
                          <FaTrophy className="text-4xl text-yellow-500 mb-4" />
                          <p className="text-xl font-semibold">Achieve</p>
                        </CardHeader>
                        <CardBody>
                          <p>Reach your fitness goals with personalized guidance.</p>
                        </CardBody>
                      </Card>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <Testimonials/>
              </section>
              <section className="py-20 bg-zinc-200">
                <div className="mx-auto text-center">
                  <h3 className="text-3xl font-bold mb-6">Join Our Community</h3>
                  <p className="mb-8">Become part of a thriving community of fitness enthusiasts and professionals.</p>
                  <Button size="lg" as={Link} href="/signup">
                    Sign Up Now
                  </Button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

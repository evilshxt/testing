<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Industrial Card Components Library</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * { font-family: 'Inter', sans-serif; }
        .card { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .card:hover { transform: translateY(-2px); }
        .gradient-overlay { background: linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%); }
        .counter { animation: countUp 2s ease-out; }
        @keyframes countUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
    </style>
</head>
<body class="bg-gray-50 font-['Inter'] antialiased">
    <div class="container mx-auto px-6 py-12 max-w-7xl">
        <h1 class="text-4xl font-bold text-gray-900 mb-2">Industrial Card Components Library</h1>
        <p class="text-gray-600 mb-12 text-lg">Enterprise-grade, responsive card components for industrial websites</p>

        <!-- Product Cards Section -->
        <section class="mb-16">
            <h2 class="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-2">
                🛠️ Product Cards
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Product Card 1 -->
                <div class="card bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl hover:border-blue-200 group" data-aos="fade-up">
                    <div class="flex gap-6 h-full">
                        <div class="flex-shrink-0">
                            <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center gap-2 mb-3">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">OEM Certified</span>
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Smart Sensor</span>
                            </div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Industrial Temperature Sensor</h3>
                            <ul class="text-sm text-gray-600 space-y-1 mb-4">
                                <li>• Range: -40°C to +125°C</li>
                                <li>• Accuracy: ±0.1°C</li>
                                <li>• IP67 Protection</li>
                            </ul>
                            <div class="flex items-center justify-between">
                                <span class="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">In Stock</span>
                                <button class="text-blue-600 hover:text-blue-800 text-sm font-medium">View Details →</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Product Card 2 -->
                <div class="card bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl hover:border-orange-200 group" data-aos="fade-up" data-aos-delay="100">
                    <div class="flex gap-6 h-full">
                        <div class="flex-shrink-0">
                            <div class="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center gap-2 mb-3">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">High Voltage</span>
                            </div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">Power Distribution Unit</h3>
                            <ul class="text-sm text-gray-600 space-y-1 mb-4">
                                <li>• 480V AC Input</li>
                                <li>• 32A Maximum Load</li>
                                <li>• Remote Monitoring</li>
                            </ul>
                            <div class="flex items-center justify-between">
                                <span class="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">Coming Soon</span>
                                <button class="text-orange-600 hover:text-orange-800 text-sm font-medium">Learn More →</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Product Card 3 -->
                <div class="card bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl hover:border-green-200 group" data-aos="fade-up" data-aos-delay="200">
                    <div class="flex gap-6 h-full">
                        <div class="flex-shrink-0">
                            <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </div>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center gap-2 mb-3">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Eco-Friendly</span>
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Premium</span>
                            </div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">Hydraulic Actuator System</h3>
                            <ul class="text-sm text-gray-600 space-y-1 mb-4">
                                <li>• 500 bar pressure</li>
                                <li>• Energy efficient</li>
                                <li>• 24/7 operation</li>
                            </ul>
                            <div class="flex items-center justify-between">
                                <span class="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">In Stock</span>
                                <button class="text-green-600 hover:text-green-800 text-sm font-medium">Configure →</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Project Cards Section -->
        <section class="mb-16">
            <h2 class="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-2">
                🏗️ Project Cards
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Project Card 1 -->
                <div class="card relative overflow-hidden rounded-2xl shadow-xl group min-h-[300px]" data-aos="zoom-in">
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"></div>
                    <div class="absolute inset-0 gradient-overlay"></div>
                    <div class="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                        <div>
                            <span class="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">Manufacturing</span>
                            <h3 class="text-xl font-semibold mb-2">BMW Assembly Line Automation</h3>
                            <p class="text-blue-100 text-sm mb-4">Munich, Germany</p>
                            <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p class="text-sm text-blue-100 mb-3">Complete automation solution for vehicle assembly including robotic welding, painting, and quality control systems.</p>
                                <div class="flex items-center gap-4 text-sm">
                                    <span>🕐 Completed: Q2 2024</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                                <div class="text-2xl font-bold">30%</div>
                                <div class="text-xs text-blue-200">Energy Reduction</div>
                            </div>
                            <button class="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                View Case Study
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Project Card 2 -->
                <div class="card relative overflow-hidden rounded-2xl shadow-xl group min-h-[300px]" data-aos="zoom-in" data-aos-delay="100">
                    <div class="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800"></div>
                    <div class="absolute inset-0 gradient-overlay"></div>
                    <div class="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                        <div>
                            <span class="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">Renewable Energy</span>
                            <h3 class="text-xl font-semibold mb-2">Wind Farm Control System</h3>
                            <p class="text-green-100 text-sm mb-4">North Sea, Denmark</p>
                            <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p class="text-sm text-green-100 mb-3">Advanced SCADA system for monitoring and controlling 150 offshore wind turbines with predictive maintenance capabilities.</p>
                                <div class="flex items-center gap-4 text-sm">
                                    <span>🕐 Completed: Q1 2024</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                                <div class="text-2xl font-bold">850MW</div>
                                <div class="text-xs text-green-200">Power Output</div>
                            </div>
                            <button class="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                View Case Study
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Project Card 3 -->
                <div class="card relative overflow-hidden rounded-2xl shadow-xl group min-h-[300px]" data-aos="zoom-in" data-aos-delay="200">
                    <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800"></div>
                    <div class="absolute inset-0 gradient-overlay"></div>
                    <div class="relative z-10 p-8 h-full flex flex-col justify-between text-white">
                        <div>
                            <span class="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">Pharmaceuticals</span>
                            <h3 class="text-xl font-semibold mb-2">Clean Room Automation</h3>
                            <p class="text-purple-100 text-sm mb-4">Basel, Switzerland</p>
                            <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p class="text-sm text-purple-100 mb-3">Sterile manufacturing environment with automated material handling and environmental monitoring systems.</p>
                                <div class="flex items-center gap-4 text-sm">
                                    <span>🕐 Completed: Q4 2023</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                                <div class="text-2xl font-bold">99.9%</div>
                                <div class="text-xs text-purple-200">Uptime</div>
                            </div>
                            <button class="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                View Case Study
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Solution Cards Section -->
        <section class="mb-16">
            <h2 class="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-2">
                🧰 Solution Cards
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Solution Card 1 -->
                <div class="card bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl hover:border-blue-600 group" data-aos="fade-up">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                            <svg class="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <div class="h-px bg-gradient-to-r from-blue-200 to-transparent flex-1"></div>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">Quality Assurance Systems</h3>
                    <p class="text-gray-600 mb-6">Comprehensive testing and validation solutions ensuring product quality and regulatory compliance across all manufacturing stages.</p>
                    <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                        <div class="flex items-center gap-2 text-sm text-gray-600">
                            <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                            Automated inspection systems
                        </div>
                        <div class="flex items-center gap-2 text-sm text-gray-600">
                            <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                            Real-time data analytics
                        </div>
                        <div class="flex items-center gap-2 text-sm text-gray-600">
                            <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                            Compliance reporting
                        </div>
                    </div>
                </div>

                <!-- Solution Card 2 -->
                <div class="card bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl hover:border-green-600 group" data-aos="fade-up" data-aos-delay="100">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors">
                            <svg class="w-6 h-6 text-green-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <div class="h-px bg-gradient-to-r from-green-200 to-transparent flex-1"></div>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">Energy Management</h3>
                    <p class="text-gray-600 mb-6">Smart energy monitoring and optimization solutions that reduce operational costs and environmental impact through advanced analytics.</p>
                    <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                        <div class="flex items-center gap-2 text-sm text-gray-600">
                            <span class="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                            Smart metering systems
                        </div>
                        <div class="flex items-center gap-2 text-sm text-gray-600">
                            <span class="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                            Predictive maintenance
                        </div>
                        <div class="flex items-center gap-2 text-sm text-gray-600">
                            <span class="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                            Cost optimization
                        </div>
                    </div>
                </div>

                <!-- Solution Card 3 -->
                <div class="card bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl hover:border-purple-600 group" data-aos="fade-up" data-aos-delay="200">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                            <svg class="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                            </svg>
                        </div>
                        <div class="h-px bg-gradient-to-r from-purple-200 to-transparent flex-1"></div>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">Process Automation</h3>
                    <p class="text-gray-600 mb-6">End-to-end automation solutions that streamline manufacturing processes, reduce errors, and improve overall operational efficiency.</p>
                    <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-y-2">
                        <div class="flex items-center gap-2 text-sm text-gray-600">
                            <span class="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                            Robotic integration
                        </div>
                        <div class="flex items-center gap-2 text-sm text-gray-600">
                            <span class="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                            Workflow optimization
                        </div>
                        <div class="flex items-center gap-2 text-sm text-gray-600">
                            <span class="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                            Error reduction
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Workflow Step Cards Section -->
        <section class="mb-16">
            <h2 class="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-2">
                📶 Workflow Step Cards
            </h2>
            
            <!-- Horizontal Timeline Layout -->
            <div class="mb-12">
                <h3 class="text-lg font-medium text-gray-700 mb-6">Horizontal Timeline</h3>
                <div class="flex overflow-x-auto gap-6 pb-4">
                    <div class="card flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:border-blue-200 transition-all" data-aos="fade-left">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">01</div>
                            <div class="h-px bg-gradient-to-r from-blue-200 to-gray-200 flex-1"></div>
                        </div>
                        <h4 class="text-lg font-semibold text-gray-900 mb-2">Analysis & Planning</h4>
                        <p class="text-gray-600 text-sm">Comprehensive assessment of current systems and strategic planning for optimal implementation approach.</p>
                    </div>
                    
                    <div class="card flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:border-green-200 transition-all" data-aos="fade-left" data-aos-delay="100">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">02</div>
                            <div class="h-px bg-gradient-to-r from-green-200 to-gray-200 flex-1"></div>
                        </div>
                        <h4 class="text-lg font-semibold text-gray-900 mb-2">Design & Engineering</h4>
                        <p class="text-gray-600 text-sm">Custom solution design with detailed engineering specifications and compliance validation.</p>
                    </div>
                    
                    <div class="card flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:border-purple-200 transition-all" data-aos="fade-left" data-aos-delay="200">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">03</div>
                            <div class="h-px bg-gradient-to-r from-purple-200 to-gray-200 flex-1"></div>
                        </div>
                        <h4 class="text-lg font-semibold text-gray-900 mb-2">Implementation</h4>
                        <p class="text-gray-600 text-sm">Seamless installation and integration with minimal disruption to existing operations.</p>
                    </div>
                    
                    <div class="card flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:border-orange-200 transition-all" data-aos="fade-left" data-aos-delay="300">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">04</div>
                            <div class="h-px bg-gradient-to-r from-orange-200 to-gray-200 flex-1"></div>
                        </div>
                        <h4 class="text-lg font-semibold text-gray-900 mb-2">Testing & Validation</h4>
                        <p class="text-gray-600 text-sm">Rigorous testing protocols ensuring system performance meets all specifications and requirements.</p>
                    </div>
                </div>
            </div>

            <!-- Vertical Stacked Layout -->
            <div>
                <h3 class="text-lg font-medium text-gray-700 mb-6">Vertical Stacked Layout</h3>
                <div class="space-y-6">
                    <div class="card bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:border-blue-200 transition-all" data-aos="fade-up">
                        <div class="flex items-start gap-6">
                            <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">01</div>
                            <div class="flex-1">
                                <h4 class="text-lg font-semibold text-gray-900 mb-2">Requirements Gathering</h4>
                                <p class="text-gray-600">Detailed analysis of operational needs, technical constraints, and business objectives to ensure optimal solution alignment.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:border-green-200 transition-all" data-aos="fade-up" data-aos-delay="100">
                        <div class="flex items-start gap-6">
                            <div class="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">02</div>
                            <div class="flex-1">
                                <h4 class="text-lg font-semibold text-gray-900 mb-2">System Design</h4>
                                <p class="text-gray-600">Comprehensive architectural planning with detailed specifications, component selection, and integration protocols.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="card bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl hover:border-purple-200 transition-all" data-aos="fade-up" data-aos-delay="200">
                        <div class="flex items-start gap-6">
                            <div class="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0">03</div>
                            <div class="flex-1">
                                <h4 class="text-lg font-semibold text-gray-900 mb-2">Deployment & Support</h4>
                                <p class="text-gray-600">Full deployment support with ongoing maintenance, training, and technical assistance to ensure operational excellence.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Stat/Impact Cards Section -->
        <section class="mb-16">
            <h2 class="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-2">
                📊 Stat & Impact Cards
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Stat Card 1 -->
                <div class="card bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl p-6 text-white hover:shadow-2xl hover:scale-105 transition-all" data-aos="zoom-in">
                    <div class="flex items-center justify-between mb-4">
                        <svg class="w-8 h-8 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded">2024</span>
                    </div>
                    <div class="counter text-4xl font-bold mb-2">250+</div>
                    <div class="text-blue-100 text-sm font-medium">Projects Completed</div>
                </div>

                <!-- Stat Card 2 -->
                <div class="card bg-gradient-to-br from-green-600 to-green-800 rounded-2xl shadow-xl p-6 text-white hover:shadow-2xl hover:scale-105 transition-all" data-aos="zoom-in" data-aos-delay="100">
                    <div class="flex items-center justify-between mb-4">
                        <svg class="w-8 h-8 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        <span class="text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded">Avg</span>
                    </div>
                    <div class="counter text-4xl font-bold mb-2">40%</div>
                    <div class="text-green-100 text-sm font-medium">Energy Savings</div>
                </div>

                <!-- Stat Card 3 -->
                <div class="card bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl shadow-xl p-6 text-white hover:shadow-2xl hover:scale-105 transition-all" data-aos="zoom-in" data-aos-delay="200">
                    <div class="flex items-center justify-between mb-4">
                        <svg class="w-8 h-8 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span class="text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded">Uptime</span>
                    </div>
                    <div class="counter text-4xl font-bold mb-2">99.8%</div>
                    <div class="text-purple-100 text-sm font-medium">System Reliability</div>
                </div>

                <!-- Stat Card 4 -->
                <div class="card bg-gradient-to-br from-orange-600 to-orange-800 rounded-2xl shadow-xl p-6 text-white hover:shadow-2xl hover:scale-105 transition-all" data-aos="zoom-in" data-aos-delay="300">
                    <div class="flex items-center justify-between mb-4">
                        <svg class="w-8 h-8 text-orange-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                        </svg>
                        <span class="text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded">Global</span>
                    </div>
                    <div class="counter text-4xl font-bold mb-2">50+</div>
                    <div class="text-orange-100 text-sm font-medium">Countries Served</div>
                </div>
            </div>
        </section>

        <!-- Dark Theme Stat Cards -->
        <section class="mb-16">
            <h2 class="text-2xl font-semibold text-gray-800 mb-8 flex items-center gap-2">
                📊 Dark Theme Impact Cards
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Dark Stat Card 1 -->
                <div class="card bg-[#24272b] rounded-2xl shadow-xl p-8 text-white hover:shadow-2xl hover:bg-[#2a2d33] transition-all" data-aos="fade-up">
                    <div class="flex items-center justify-between mb-6">
                        <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                            </svg>
                        </div>
                        <span class="text-xs font-medium bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">ROI</span>
                    </div>
                    <div class="counter text-4xl font-bold mb-2 text-blue-400">325%</div>
                    <div class="text-gray-300 text-sm font-medium mb-2">Average Return on Investment</div>
                    <div class="text-xs text-gray-500">Based on 3-year analysis</div>
                </div>

                <!-- Dark Stat Card 2 -->
                <div class="card bg-[#24272b] rounded-2xl shadow-xl p-8 text-white hover:shadow-2xl hover:bg-[#2a2d33] transition-all" data-aos="fade-up" data-aos-delay="100">
                    <div class="flex items-center justify-between mb-6">
                        <div class="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"></path>
                            </svg>
                        </div>
                        <span class="text-xs font-medium bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">CO₂</span>
                    </div>
                    <div class="counter text-4xl font-bold mb-2 text-green-400">2.5M</div>
                    <div class="text-gray-300 text-sm font-medium mb-2">Tons CO₂ Reduced</div>
                    <div class="text-xs text-gray-500">Through efficiency improvements</div>
                </div>

                <!-- Dark Stat Card 3 -->
                <div class="card bg-[#24272b] rounded-2xl shadow-xl p-8 text-white hover:shadow-2xl hover:bg-[#2a2d33] transition-all" data-aos="fade-up" data-aos-delay="200">
                    <div class="flex items-center justify-between mb-6">
                        <div class="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                        </div>
                        <span class="text-xs font-medium bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">Hours</span>
                    </div>
                    <div class="counter text-4xl font-bold mb-2 text-purple-400">24/7</div>
                    <div class="text-gray-300 text-sm font-medium mb-2">Technical Support</div>
                    <div class="text-xs text-gray-500">Global coverage available</div>
                </div>
            </div>
        </section>

        <!-- Usage Examples Section -->
        <section class="mb-16">
            <h2 class="text-2xl font-semibold text-gray-800 mb-8">💡 Implementation Examples</h2>
            
            <!-- Grid Layout Example -->
            <div class="mb-12">
                <h3 class="text-lg font-medium text-gray-700 mb-4">Grid Layout - Mixed Card Types</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- Example Product Card -->
                    <div class="card bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl hover:border-indigo-200 group">
                        <div class="flex gap-4">
                            <div class="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                                </svg>
                            </div>
                            <div class="flex-1 min-w-0">
                                <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mb-2">Industrial IoT</span>
                                <h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">Smart Manufacturing Hub</h3>
                                <p class="text-sm text-gray-600 mb-3">Centralized control system for factory automation</p>
                                <div class="flex items-center justify-between">
                                    <span class="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">Available</span>
                                    <button class="text-indigo-600 hover:text-indigo-800 text-sm font-medium">Learn More →</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Example Solution Card -->
                    <div class="card bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl hover:border-teal-600 group">
                        <div class="flex items-center gap-4 mb-4">
                            <div class="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-colors">
                                <svg class="w-5 h-5 text-teal-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div class="h-px bg-gradient-to-r from-teal-200 to-transparent flex-1"></div>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">Predictive Maintenance</h3>
                        <p class="text-gray-600 text-sm">AI-powered maintenance scheduling that prevents equipment failures before they occur.</p>
                    </div>

                    <!-- Example Stat Card -->
                    <div class="card bg-gradient-to-br from-rose-600 to-rose-800 rounded-2xl shadow-xl p-6 text-white hover:shadow-2xl hover:scale-105 transition-all">
                        <div class="flex items-center justify-between mb-4">
                            <svg class="w-8 h-8 text-rose-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                            </svg>
                            <span class="text-xs font-medium bg-white/20 backdrop-blur-sm px-2 py-1 rounded">Growth</span>
                        </div>
                        <div class="text-4xl font-bold mb-2">85%</div>
                        <div class="text-rose-100 text-sm font-medium">Efficiency Gain</div>
                    </div>
                </div>
            </div>

            <!-- Flex Layout Example -->
            <div>
                <h3 class="text-lg font-medium text-gray-700 mb-4">Flex Layout - Responsive Cards</h3>
                <div class="flex flex-wrap gap-6">
                    <!-- Flexible width cards -->
                    <div class="card flex-1 min-w-[300px] bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl">
                        <h3 class="text-lg font-semibold text-gray-900 mb-3">Flexible Content</h3>
                        <p class="text-gray-600 text-sm">This card adapts to available space while maintaining minimum width constraints.</p>
                    </div>
                    <div class="card flex-1 min-w-[300px] bg-white rounded-2xl shadow-xl border border-gray-100 p-6 hover:shadow-2xl">
                        <h3 class="text-lg font-semibold text-gray-900 mb-3">Responsive Design</h3>
                        <p class="text-gray-600 text-sm">Perfect for dynamic content layouts that need to adjust to different screen sizes.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Component Usage Notes -->
        <section class="bg-gray-100 rounded-2xl p-8">
            <h2 class="text-2xl font-semibold text-gray-800 mb-6">🎯 Usage Guidelines</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-lg font-medium text-gray-700 mb-4">CSS Classes Used</h3>
                    <ul class="space-y-2 text-sm text-gray-600">
                        <li><code class="bg-gray-200 px-2 py-1 rounded">rounded-2xl</code> - Consistent border radius</li>
                        <li><code class="bg-gray-200 px-2 py-1 rounded">shadow-xl</code> - Elevated appearance</li>
                        <li><code class="bg-gray-200 px-2 py-1 rounded">p-6, p-8</code> - Consistent padding</li>
                        <li><code class="bg-gray-200 px-2 py-1 rounded">hover:shadow-2xl</code> - Interactive feedback</li>
                        <li><code class="bg-gray-200 px-2 py-1 rounded">transition-all</code> - Smooth animations</li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-lg font-medium text-gray-700 mb-4">AOS Animations</h3>
                    <ul class="space-y-2 text-sm text-gray-600">
                        <li><code class="bg-gray-200 px-2 py-1 rounded">data-aos="fade-up"</code> - Fade in from bottom</li>
                        <li><code class="bg-gray-200 px-2 py-1 rounded">data-aos="fade-left"</code> - Slide in from right</li>
                        <li><code class="bg-gray-200 px-2 py-1 rounded">data-aos="zoom-in"</code> - Scale up entrance</li>
                        <li><code class="bg-gray-200 px-2 py-1 rounded">data-aos-delay="100"</code> - Staggered timing</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>

    <script>
        // Initialize AOS
        AOS.init({
            duration: 800,
            once: true,
            offset: 100
        });

        // GSAP hover effects for cards
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                gsap.to(card, {
                    y: -5,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            
            card.addEventListener('mouseleave', () => {
                gsap.to(card, {
                    y: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
        });

        // Animate counter numbers
        const counters = document.querySelectorAll('.counter');
        const animateCounter = (counter) => {
            const target = counter.textContent;
            const isPercentage = target.includes('%');
            const isPlus = target.includes('+');
            const isSlash = target.includes('/');
            
            let endValue = parseInt(target.replace(/[^\d]/g, ''));
            
            if (isNaN(endValue)) return;
            
            gsap.fromTo(counter, {
                innerHTML: 0
            }, {
                innerHTML: endValue,
                duration: 2,
                ease: "power2.out",
                snap: { innerHTML: 1 },
                onUpdate: function() {
                    let value = Math.round(this.targets()[0].innerHTML);
                    if (isPercentage) value += '%';
                    if (isPlus) value += '+';
                    if (isSlash) value = value + '/7';
                    counter.innerHTML = value;
                }
            });
        };

        // Trigger counter animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        });

        counters.forEach(counter => observer.observe(counter));
    </script>
</body>
</html>
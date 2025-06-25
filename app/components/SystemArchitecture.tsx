'use client';

import { motion } from 'framer-motion';

export default function SystemArchitecture() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-12 text-center">
					System Architecture & Projects
				</motion.h2>

				<div className="grid grid-cols-1 gap-8">
					{[
						{
							title: 'Scalable Microservices Architecture',
							description: 'Designed and implemented a microservices architecture handling 1M+ daily requests with 99.99% uptime',
							details: [
								'Containerized microservices with Docker and Kubernetes',
								'Implemented service mesh with Istio',
								'Designed event-driven architecture using Apache Kafka',
								'Achieved 40% reduction in response times',
							],
							tech: ['Kubernetes', 'Docker', 'Istio', 'Kafka', 'MongoDB', 'Redis'],
						},
						{
							title: 'Real-time Data Processing Pipeline',
							description: 'Built a robust data processing pipeline handling 5TB+ daily data with sub-second latency',
							details: [
								'Implemented stream processing with Apache Flink',
								'Designed fault-tolerant architecture with automatic failover',
								'Optimized data throughput by 60%',
								'Implemented comprehensive monitoring with Prometheus & Grafana',
							],
							tech: ['Apache Flink', 'AWS Kinesis', 'Prometheus', 'Grafana', 'Python', 'PostgreSQL'],
						},
					].map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.2 }}
							className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
						>
							<h3 className="text-2xl font-bold mb-4">{project.title}</h3>
							<p className="text-gray-400 mb-6">{project.description}</p>
							<div className="mb-6">
								<h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
								<ul className="list-disc list-inside space-y-2 text-gray-300">
									{project.details.map((detail, i) => (
										<li key={i}>{detail}</li>
									))}
								</ul>
							</div>
							<div className="flex flex-wrap gap-2">
								{project.tech.map((tech, i) => (
									<span key={i} className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20">
										{tech}
									</span>
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

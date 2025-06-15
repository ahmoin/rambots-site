import { Atom, Award, BookOpen, GraduationCap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MCSMBanner({
	className,
	...props
}: React.ComponentProps<"div">) {
	return (
		<div
			className={cn(
				"w-[101vw] bg-gradient-to-r from-slate-800 to-slate-900 h-[400px] lg:h-[300px] my-8 relative left-1/2 -translate-x-1/2",
				className,
			)}
			{...props}
		>
			<div className="container mx-auto px-4 py-6 h-full">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center h-full">
					<div className="space-y-6 md:col-span-2 text-amber-50">
						<div>
							<div className="flex items-center mb-1">
								<div className="h-px w-8 bg-amber-300/70 mr-3"></div>
								<span className="text-amber-200 text-xs uppercase tracking-widest font-bold">
									Excellence in Education
								</span>
							</div>
							<h1 className="text-2xl md:text-3xl font-bold leading-tight text-amber-100 font-serif">
								Manhattan Center for Science and Mathematics
							</h1>
						</div>
						<p className="text-lg font-medium -mt-4">
							Empowering Future Innovators Through Excellence in Education
						</p>
						<div className="flex flex-wrap gap-3 mt-8">
							<div className="flex items-center space-x-1">
								<Atom className="size-5" />
								<span className="font-medium text-sm">Advanced STEM</span>
							</div>
							<div className="flex items-center space-x-1">
								<Award className="size-5" />
								<span className="font-medium text-sm">Award-Winning</span>
							</div>
							<div className="flex items-center space-x-1">
								<BookOpen className="size-5" />
								<span className="font-medium text-sm">College Prep</span>
							</div>
							<div className="flex items-center space-x-1">
								<GraduationCap className="size-5" />
								<span className="font-medium text-sm">Expert Faculty</span>
							</div>
						</div>
						<Link href={"https://www.mcsm.net/"} target="_blank">
							<Button
								size={"lg"}
								className="rounded-none text-md cursor-pointer"
							>
								VISIT
							</Button>
						</Link>
					</div>
					<div className="relative h-[200px] md:h-[250px] rounded-lg overflow-hidden hidden md:block">
						<div className="absolute inset-0 bg-black/20 z-10 rounded-lg"></div>
						<video
							src="/media/mcsm.mp4"
							className="w-full h-full object-cover rounded-lg"
							autoPlay
							loop
							muted
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

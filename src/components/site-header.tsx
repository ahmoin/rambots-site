import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { ModeSwitcher } from "@/components/mode-switcher";
import { Separator } from "@/components/ui/separator";

export function SiteHeader() {
	return (
		<header className="bg-background sticky top-0 z-50 w-full">
			<div className="container-wrapper 3xl:fixed:px-0 px-6">
				<div className="3xl:fixed:container flex justify-between h-(--header-height) items-center gap-2 **:data-[slot=separator]:!h-4">
					<MainNav />
					<MobileNav />
					<div className="flex flex-row items-center justify-between w-full sm:w-1/2 sm:justify-end">
						<div className="sm:ml-4 flex items-center gap-2">
							{/* <Separator orientation="vertical" className="3xl:flex hidden" />
							<SiteConfig className="3xl:flex hidden" /> */}
							<Separator orientation="vertical" />
							<ModeSwitcher />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

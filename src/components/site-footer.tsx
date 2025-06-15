export function SiteFooter() {
	return (
		<footer className="group-has-[.section-soft]/body:bg-surface/40 3xl:fixed:bg-transparent dark:bg-transparent">
			<div className="container-wrapper px-4 xl:px-6">
				<div className="flex h-(--footer-height) items-center justify-between">
					<div className="text-muted-foreground w-full text-center text-xs leading-loose sm:text-sm">
						Built by{" "}
						<a
							href={"https://ahmoin.com"}
							target="_blank"
							rel="noreferrer"
							className="font-medium underline underline-offset-4"
						>
							ahmoin
						</a>
						.
					</div>
				</div>
			</div>
		</footer>
	);
}

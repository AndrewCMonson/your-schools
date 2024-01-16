const Footer = () => {
    const currentYear = new Date().getFullYear()
	
    return (
		<footer className="bg-dark text-black text-center py-3 shadow-lg">
			<div className="container mx-auto">
				<p className="m-0">
					&copy; {currentYear} <a href="#">Your Schools</a>. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;

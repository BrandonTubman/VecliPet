export default function Footer() {
  return (
    <footer className="text-black py-8 px-4" style={{ backgroundColor: '#0cb0a0' }}>
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Contact Info Section */}
        <div className="mb-8">
          <div className="mt-4">
            <p className="text-lg">Email: contact@veclipet.com</p>
            <p className="text-lg">Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>

        {/* Call to Action Button */}
        <div>
          <a
            href="/schedule.html"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
          >
            Schedule an Appointment
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-sm">
          <p>&copy; {new Date().getFullYear()} VecliPet. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

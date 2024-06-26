import React from 'react';

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start sm:justify-center">
                <div className="mt-3 text-center sm:mt-0 sm:text-center">
                  <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Website Information</h3>
                  <div className="mt-2">
                    <p className="text-md text-gray-600">How was this Website Built?</p>
                  </div>
                <hr></hr>
                <div className='text-left m-3'>
                    <p>Built with love</p>
                   
                    <p >Jokes Aside this webpage was built with a React.js framework utilizing its capabilities</p>
                    <p>The css is using <a href='https://tailwindcss.com/' target="_blank" style={{"color": "blue"}}>Tailwind CSS</a>, making the website look amazing</p>
                    <p>The webpage is hosted on Vercel for free!</p>
                </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

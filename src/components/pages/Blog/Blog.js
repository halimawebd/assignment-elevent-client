// import React from "react";
// import useTitle from "../../Hooks/useTitle";

// const Blog = () => {
//     useTitle('blog')
//   return (
//     <div>
//       <section className="dark:bg-gray-800 dark:text-gray-100">
//         <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
//           <h2 className="text-2xl font-semibold sm:text-4xl">
//             Frequently Asked Questions
//           </h2>
//           <p className="mt-4 mb-8 dark:text-gray-400">
//             Sagittis tempor donec id vestibulum viverra. Neque condimentum
//             primis orci at lacus amet bibendum.
//           </p>
//           <div className="space-y-4">
//             <details className="w-full border rounded-lg">
//               <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
//                 Difference between SQL and NoSQL
//               </summary>
//               <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
//               SQL databases are normalized databases where the data is broken down into various
//                logical tables to avoid data redundancy and data duplication. In this scenario,
//                 SQL databases are faster than their NoSQL counterparts for joins, queries, updates, etc.

//                 On the other hand, NoSQL databases are specifically designed for unstructured 
//                 data which can be document-oriented, column-oriented, graph-based, etc.In this
//                  case, a particular data entity is stored together and not partitioned.{" "}
//               </p>
//             </details>
//             <details className="w-full border rounded-lg">
//               <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
//                 What is JWT, and how does it work?
//               </summary>
//               <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
//               JSON Web Token is an open industry standard used to share information between 
//               two entities, usually a client (like your app’s frontend) and a server (your app’s backend).

//                 They contain JSON objects which have the information that needs to be shared.
//                  Each JWT is also signed using cryptography (hashing) to ensure that the JSON 
//                  contents (also known as JWT claims) cannot be altered by the client or a malicious 
//                  `-0
//                  party.Signed tokens can verify the integrity of the
//                 claims contained within it, while encrypted tokens hide those
//                 claims from other parties. When tokens are signed using
//                 public/private key pairs, the signature also certifies that only
//                 the party holding the private key is the one that signed it.{" "}
//               </p>
//             </details>
//             <details className="w-full border rounded-lg">
//               <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
//                 What is the difference between javascript and NodeJS?
//               </summary>
//               <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
//               NodeJS is a cross-platform and opensource Javascript runtime environment that
//                allows the javascript to be run on the server-side. Nodejs allows Javascript 
//                code to run outside the browser. Nodejs comes with a lot of modules 
//                used in web development. 

//               Javascript is a Scripting language. It is mostly abbreviated as JS. It 
//               can be said that Javascript is the updated version of the ECMA script.
//                Javascript is a high-level programming language that uses the concept of 
//                Oops but it is based on prototype inheritance.
//               </p>
//             </details>
//             <details className="w-full border rounded-lg">
//               <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
//                 How does NodeJS handle multiple requests at the same time?
//               </summary>
//               <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
//                 NodeJS receives multiple client requests and places them into
//                 EventQueue. NodeJS is built with the concept of event-driven
//                 architecture. NodeJS has its own EventLoop which is an infinite
//                 loop that receives requests and processes them. EventLoop is the
//                 listener for the EventQueue. If NodeJS can process the request
//                 without I/O blocking then the event loop would itself process
//                 the request and sends the response back to the client by itself.
//                 But, it is possible to process multiple requests parallelly
//                 using the NodeJS cluster module or worker_threads module.
//               </p>
//             </details>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Blog;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [domain, setDomain] = useState('');
  const [output, setOutput] = useState(null);
  const [loading, setLoading] = useState(false);

  const lookupDomain = () => {
    setLoading(true);
    setOutput(null);

    setTimeout(() => {
      setLoading(false);
      setOutput({
        domain: domain,
        registrar: 'Hidden Registrar',
        creationDate: '2021-01-01',
        expirationDate: '2023-01-01',
        nameservers: 'ns1.hidden.com, ns2.hidden.com',
        status: 'active',
        owner: 'Jane Doe',
        email: 'hidden@example.com',
        phone: '+1234567890',
        additionalInfo:
          "This domain has hidden SEO data that other tools can't provide.",
      });
    }, 2000);
  };

  return (
    <div className="container flex flex-col items-center justify-center min-h-screen bg-base-100 text-base-content">
      <div className="console-box border-2 border-primary rounded-lg p-6 w-full max-w-lg mx-auto bg-neutral text-neutral-content">
        <h1 className="console-title border-b border-primary pb-2 mb-4 text-center text-2xl font-bold">
          WHOIS Domain Lookup
        </h1>
        <input
          className="console-input bg-neutral text-neutral-content border border-primary rounded-lg w-full p-2 mb-4"
          type="text"
          placeholder="Enter domain name (e.g., example.com)"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
        />
        <button
          className="console-button bg-primary text-neutral-content border border-primary rounded-lg p-2 w-full mb-4"
          onClick={lookupDomain}
        >
          Search
        </button>
        {loading && (
          <div className="flex justify-center items-center">
            <div className="spinner border-t-2 border-b-2 border-primary h-8 w-8 animate-spin"></div>
          </div>
        )}
        {output && (
          <div className="console-output overflow-auto mt-4">
            <table className="table table-compact w-full">
              <tbody>
                <tr>
                  <th>Domain</th>
                  <td>{output.domain}</td>
                </tr>
                <tr>
                  <th>Registrar</th>
                  <td>{output.registrar}</td>
                </tr>
                <tr>
                  <th>Creation Date</th>
                  <td>{output.creationDate}</td>
                </tr>
                <tr>
                  <th>Expiration Date</th>
                  <td>{output.expirationDate}</td>
                </tr>
                <tr>
                  <th>Nameservers</th>
                  <td>{output.nameservers}</td>
                </tr>
                <tr>
                  <th>Status</th>
                  <td>{output.status}</td>
                </tr>
                <tr>
                  <th>Owner</th>
                  <td>{output.owner}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{output.email}</td>
                </tr>
                <tr>
                  <th>Phone</th>
                  <td>{output.phone}</td>
                </tr>
                <tr>
                  <th>Additional Info</th>
                  <td>{output.additionalInfo}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      <footer className="text-center mt-8 text-neutral-content">
        <p>© 2023 YourCompany. All Rights Reserved.</p>
        <p>We are a black SEO tool uncovering hidden domain information.</p>
        <p>
          <a href="#" className="link link-hover">
            Privacy Policy
          </a>{' '}
          |
          <a href="#" className="link link-hover">
            Terms of Service
          </a>{' '}
          |
          <a href="#" className="link link-hover">
            FAQ
          </a>{' '}
          |
          <a href="#" className="link link-hover">
            Support
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;

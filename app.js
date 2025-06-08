
function generateMVP() {
  const idea = document.getElementById("ideaInput").value.trim();
  const output = document.getElementById("outputArea");
  if (!idea) {
    output.innerHTML = "<p>Please describe your idea or pain point to generate an MVP.</p>";
    return;
  }

  // Simulated response (replace with actual GPT output logic if needed)
  output.innerHTML = `
    <h2>🚀 Your MVP Starter Pack</h2>
    <p><strong>Idea:</strong> ${idea}</p>
    <p><strong>Landing Page:</strong> Single-page layout with hero section, CTA button, and mobile-friendly design.</p>
    <p><strong>Collection Feature:</strong> Use a grid layout with product cards.</p>
    <p><strong>Lead Capture:</strong> Embed form with Name, Email, WhatsApp number.</p>
    <p><strong>Blog Strategy:</strong> 3 articles on topics that resonate with your niche and improve SEO.</p>
    <p><strong>Optional Add-on:</strong> WhatsApp ChatBot for customer queries using client-side logic or third-party plugin.</p>
  `;
}

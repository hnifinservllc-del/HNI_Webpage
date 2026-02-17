function downloadVCard() {
  const vCardData = `
BEGIN:VCARD
VERSION:3.0
N:LastName;FirstName
FN:Your Name
ORG:Your Company Name
TITLE:Your Job Title
TEL;TYPE=CELL:+1234567890
EMAIL:you@email.com
URL:https://yourdomain.com
END:VCARD
`.trim();

  const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "YourName.vcf";
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

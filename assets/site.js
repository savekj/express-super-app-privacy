function configValue(key) { return window.expressLegalConfig?.[key] || ''; }
document.querySelectorAll('[data-company]').forEach((node) => node.textContent = configValue('companyName'));
document.querySelectorAll('[data-effective]').forEach((node) => node.textContent = configValue('effectiveDate'));
document.querySelectorAll('[data-support-email]').forEach((node) => { node.textContent = configValue('supportEmail'); node.href = `mailto:${configValue('supportEmail')}`; });
const request = document.querySelector('[data-deletion-request]');
if (request) request.addEventListener('click', () => {
  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  if (!name || !email) { document.querySelector('#validation').textContent = 'กรุณากรอกชื่อและอีเมลที่ใช้กับแอปก่อนส่งคำขอ'; return; }
  const subject = encodeURIComponent('Express Super App — Account deletion request');
  const body = encodeURIComponent(`ชื่อ: ${name}\nอีเมลที่ใช้กับแอป: ${email}\n\nข้าพเจ้าขอให้ตรวจสอบและดำเนินการลบบัญชี Express Super App ของข้าพเจ้า`);
  window.location.href = `mailto:${configValue('supportEmail')}?subject=${subject}&body=${body}`;
});

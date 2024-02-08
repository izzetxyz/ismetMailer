var nodemailer = require('nodemailer');
const Admin = require('../models/adminModel');
const bcrypt = require('bcryptjs');
const showHomePage = async (req, res, next) => {

  try {

    res.render('admin/homePage', { layout: '../layouts/adminHome_Layout', title: `Keep | Send Mail`, description: ``, keywords: `` })


  } catch (err) {
    console.log(err);
  }
};

const sendMail = async (req, res, next) => {
  try {
    const mails = req.body.Mail_Addresses.split('\r\n')
    for (let i = 0; i < mails.length; i++) {
      // Transporter oluşturun
      const transporter = nodemailer.createTransport({
        service: "Outlook365",
        host: "smtp.office365.com",
        secureConnection: false,
        port: 587,
        secure: false, // STARTTLS kullanıldığı için false olmalı
        auth: {
          user: 'emir.sungur@petronan.com.tr',
          pass: '937182Emir*'
        },
        tls: {
          ciphers: "SSLv3",
          rejectUnauthorized: false,
        },
      });
      var mailOptions = {
        from: 'emir.sungur@petronan.com.tr',
        to: mails[i],
        subject: (req.body.Mail_Title),

        html: (`<!DOCTYPE html>
            <html lang="en">
            
            <div dir=ltr>

 <table style=direction:ltr;border-collapse:collapse;>
   <tr>

     <td style=font-size:0;height:24px;line-height:0;>
     </td>

     </tr>
   <tr>
    <td>
      <table cellpadding=0  cellspacing=0  border=0  style=width:100%;  width=100%>
        <tr> <td valign=top  style="padding:.01px 0.01px 0.01px 0px;vertical-align:top;">
                  <table cellpadding=0  cellspacing=0  style=border-collapse:collapse;>
                  <p   style=margin:.1px;line-height:120%;font-size:16px;>
                    ${req.body.Mail_Content}  
                    
                    <tr>
                      <td style=line-height:1.2;padding:.01px;>
                        <p style=margin:.1px;line-height:80%;font-size:16px;> <span>&nbsp;
                          <span style=font-family:Arial;font-size:22px;font-weight:bold;color:#646464;letter-spacing:0;white-space:nowrap;>Ismet Emir Sungur</span>
                          <br></br><span>&nbsp;
                          <span style=font-family:Arial;font-size:17px;font-weight:bold;color:#646464;white-space:nowrap;>Foreign Trade Associate<span>&nbsp;</span></span>
                          </p>  <span>&nbsp; </td>
                          <span>&nbsp;</span>
                             <span>&nbsp;</span>
                                <span>&nbsp;</span>
                                   <span>&nbsp;</span>

                            <td>     <Hr style="width: 1px; height: 70px;" /> </td>

                          <td
                            nowrap width=300  style=padding-top:16px;white-space:nowrap;width:300px;font-family:Arial;><p style=margin:1px;line-height:90%;font-size:13px;>
                            <span style=white-space:nowrap;>
                              <img src=https://cdn.gifo.wisestamp.com/s/rfp3/45668E/26/trans.png  style=line-height:180%;width:14px;  width=14  alt=icon>&nbsp;<a href=tel:02626795300  target=_blank  style=font-family:Arial;text-decoration:unset;  rel="nofollow noreferrer"><span style=line-height:140%;font-family:Arial;font-size:13px;color-scheme:only;color:#212121;white-space:nowrap;>0 262 679 53 00</span></a>&nbsp;&nbsp;<img src=https://cdn.gifo.wisestamp.com/s/rfm1/45668E/26/trans.png  style=line-height:120%;width:14px;  width=14  alt=icon>&nbsp;<a href=tel:05304988876  target=_blank  style=font-family:Arial;text-decoration:unset;  rel="nofollow noreferrer"><span style=line-height:140%;font-family:Arial;font-size:13px;color-scheme:only;color:#212121;white-space:nowrap;>0 530 498 88 76
 </span>
 </p>
                   <img src=https://cdn.gifo.wisestamp.com/s/rfem1/45668E/26/trans.png  style=line-height:120%;width:14px;  width=14  alt=icon>&nbsp;<a href=mailto:emir.sungur@petronan.com.tr  target=_blank  style=font-family:Arial;text-decoration:unset;  rel="nofollow noreferrer"><span style=line-height:150%;font-family:Arial;font-size:13px;color-scheme:only;color:#212121;white-space:nowrap;>emir.sungur@petronan.com.tr</span>
                            </a>
                            </span></a>&nbsp;&nbsp;
                          <img src=https://cdn.gifo.wisestamp.com/s/rfw1/45668E/26/trans.png  style=line-height:150%;width:14px;  width=14  alt=icon>&nbsp;
 <a href=https://www.plastay.com  target=_blank  style=font-family:Arial;text-decoration:unset;  rel="nofollow noreferrer"><span style=line-height:150%;font-family:Arial;font-size:13px;color-scheme:only;color:#212121;white-space:nowrap;>www.plastay.com</span><br>
   <img src=https://cdn.gifo.wisestamp.com/s/rfa2/45668E/26/trans.png  style=line-height:150%;width:14px;  width=10  alt=icon>&nbsp;<a href="https://maps.google.com/?q=Ataturk Bulvar Inonu mah GGOSB No: 22 Kocaeli / Gebze" target=_blank  style=font-family:Arial;text-decoration:unset;  rel="nofollow noreferrer"><span style=line-height:150%;font-family:Arial;font-size:13px;color-scheme:only;color:#212121;white-space:nowrap;>Ataturk Bulvar Inonu mah GGOSB No: 22 Kocaeli / Gebze
 </a>
                            </td>
                    </tr>
              <tr>

                <td>
                            <table cellpadding=0  cellspacing=0>
                              <tr> </td>
                 <tr>

                <td height=0  style=height:0;></td></tr></table></td></tr></table></td></tr><tr><td style=line-height:1%;padding-top:16px;font-size:1px;></td></tr><tr><td><table cellpadding=0  cellspacing=0  style=padding-right:8px;line-height:normal;>
        <tr>

        <td style="font-family:Arial;padding:1px 8px 4px 2px;"><p style=font-size:12px;margin:1px;line-height:1.1;font-family:Arial;font-weight:bold;color:#9F9F9F;>

                </p>

                </td>

                </tr>

                            <tr>
                              <td>
                            <table cellpadding=0  cellspacing=0> <tr>
                           <hr> </hr>
                               <td>
           <img width=180  height=80  src=https://www.plastay.com/public/uploads/plastay-logo.png > </td>
          <td>
                              <td style=padding:0;width:88px;padding-right:15px;  width=88><p style=margin:1px;><img width=200  height=120  src=https://petronan.com.tr/public/uploads/marsel.PNG  alt="Gallery Image"></p></td><td style=padding:0;width:88px;padding-right:15px;  width=88><p style=margin:1px;><img width=200  height=60  src=https://petronan.com.tr/public/uploads/logo.png  alt="Gallery Image"></p></td><td style=padding:0;width:88px;padding-right:15px;  width=88><p style=margin:1px;><img width=170  height=60  src=https://walkmats.com/public/uploads/w-logo.png ></p></td></tr></table></td></tr></table></td></tr><tr><td style=line-height:1%;padding-top:16px;font-size:1px;>  
 </td>   
 </tr>
 </table>    
 </td>
</tr>
<tr>
   <td style="font-family:'ws-id YrORbGMQPVjn';font-size:.01px;line-height:0;">&nbsp;
   </td>
 </tr></table>

</div>
            
            </html>
            ` )
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          req.flash('validation_error', [{ msg: 'Bu şirket zaten kayıtlı.' }]);
        } else {
          console.log('Email sent: ' + info.response);

        }
      })
    }
    req.flash('success_message', [{ msg: 'Mailler Başarı İle Gönderildi.' }]);
    res.redirect('../izzycodes')
  }
  catch (err) {
    console.log(err)
  }
}

const sifreDegistir = async (req, res, next) => {
  try {
    res.render('admin/changePassword', { layout: '../layouts/adminHome_Layout', title: `Keep | Send Mail`, description: ``, keywords: `` })
  }
  catch (err) {
    console.log(err)
  }
}
const sifreDegistirPost = async (req, res, next) => {
  try {
    const oldPassword = req.body.oldPassword
    const newPassword = req.body.newPassword
    const RenewPassword = req.body.RenewPassword
    const findUser = await Admin.findOne({ isim: req.user.isim })
    const isMatch = await bcrypt.compare(oldPassword, findUser.sifre);
    if (isMatch) {
      if (newPassword == RenewPassword) {
        await Admin.findByIdAndUpdate(findUser._id, { sifre: await bcrypt.hash(newPassword, 8) })
        req.flash('success_message', [{ msg: 'Şifre Başarı İle Değiştirildi.' }]);
        res.redirect('../izzycodes/sifredegistir')
      }
      else {
        req.flash('validation_error', [{ msg: 'Yeni Şifreler Eşleşmiyor.' }]);
        res.redirect('../izzycodes/sifredegistir')
      }
    }
    else {
      req.flash('validation_error', [{ msg: 'Eski Şifre Eşleşmiyor.' }]);
      res.redirect('../izzycodes/sifredegistir')
    }

  }
  catch (err) {
    console.log(err)
  }
}


const logout = (req, res, next) => {
  res.clearCookie('connect.sid');
  res.redirect('../izzycodes/login')
};
module.exports = {
  showHomePage,
  sendMail,
  sifreDegistir,
  sifreDegistirPost,
  logout


}
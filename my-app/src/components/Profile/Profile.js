import React from 'react';
import ProfilePicture from "../../images/DimasProfile.jpg";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Avatar, Button, Typography, Paper, Hidden, Divider } from "@material-ui/core";
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import SettingsIcon from '@material-ui/icons/Settings';
import StepConnector from '@material-ui/core/StepConnector';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PublishIcon from '@material-ui/icons/Publish';
import SearchIcon from '@material-ui/icons/Search';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import TableChartIcon from '@material-ui/icons/TableChart';

const ColorlibConnector = withStyles({
    alternativeLabel: {
      top: 22,
    },
    active: {
      '& $line': {
        backgroundImage:
          'linear-gradient( 95deg,rgb(44, 62, 80) 0%,rgb(24, 188, 156) 50%,rgb(52, 152, 219) 100%)',
      },
    },
    completed: {
      '& $line': {
        backgroundImage:
          'linear-gradient( 95deg,rgb(44, 62, 80) 0%,rgb(24, 188, 156) 50%,rgb(52, 152, 219) 100%)',
      },
    },
    line: {
      height: 3,
      border: 0,
      backgroundColor: '#eaeaf0',
      borderRadius: 1,
    },
})(StepConnector);
  
const useColorlibStepIconStyles = makeStyles({
    root: {
      backgroundColor: '#ccc',
      zIndex: 1,
      color: '#fff',
      width: 50,
      height: 50,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    active: {
      backgroundImage:
        'linear-gradient( 136deg, rgb(44, 62, 80) 0%, rgb(24, 188, 156) 50%, rgb(52, 152, 219) 100%)',
      boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
      backgroundImage:
        'linear-gradient( 136deg, rgb(44, 62, 80) 0%, rgb(24, 188, 156) 50%, rgb(52, 152, 219) 100%)',
    },
});
  
function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;
  
    const icons = {
      1: <SettingsIcon />,
      2: <PublishIcon />,
      3: <SearchIcon />,
      4: <TableChartIcon/>,
      5: <ExpandMoreIcon />,
      6: <FindInPageIcon />,
      7: <SearchIcon />
    };
  
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >
        {icons[String(props.icon)]}
      </div>
    );
}
  
ColorlibStepIcon.propTypes = {
    active: PropTypes.bool,
    completed: PropTypes.bool,
    icon: PropTypes.node,
};
  
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
      marginBottom: "2rem"
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(3),
    },
    link: {
      "&:focus, &:hover": {
          textDecoration: "none",
          color: "white"
      },
      color: "white" 
    },
    rootProfile: {
        
    },
    avatar: {
        width: "200px",
        height: "200px",
        marginBottom: "1.5%"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch"
    },
    flexCenter: {
        display: "flex",
        justifyContent: "center"
    },
    flexColumnCenter: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    marginTop: {
        marginTop: "4%"
    }
}));
  
function getSteps() {
    return ['Elementary','Junior High', 'Senior High', 'University'];
}
  
function getStepContent(step) {
    switch (step) {
      case 0: 
        return (
            <div>
                <Typography variant="h5" align="center" style={{marginTop: "2%", marginBottom: "1%"}}>Elementary School</Typography>
                <Typography align="center">Sang Timur Tomang</Typography>
            </div>
        )
      case 1:
        return (
            <div>
                <Typography variant="h5" align="center" style={{marginTop: "2%", marginBottom: "1%"}}>Junior High School</Typography>
                <Typography align="center">Canisius College</Typography>
            </div>
        )
      case 2:
        return (
            <div>
                <Typography variant="h5" align="center" style={{marginTop: "2%", marginBottom: "1%"}}>Senior High School</Typography>
                <Typography align="center">Canisius College</Typography>
            </div>
        )
      case 3:
        return (
            <div>
                <Typography variant="h5" align="center" style={{marginTop: "2%", marginBottom: "1%"}}>University</Typography>
                <Typography align="center">Institut Teknologi Bandung</Typography>
            </div>
        )
      case 4:
        return (
            <div>
                <Typography variant="h3" align="center" style={{marginTop: "2%", marginBottom: "1%"}}>Organisasi dan Arsitektur Komputer</Typography>
                <Typography align="center">Organisasi dan Arsitektur Komputer adalah ilmu yang mempelajari bagian yang terkait erat dengan unit–unit operasional dan interkoneksi antar komponen penyusun sistem komputer dalam merealisasikan aspek arsitekturalnya. Contoh aspek organisasional adalah teknologi hardware, perangkat antarmuka, teknologi memori, dan sinyal-sinyal kontrol.</Typography>
                <Typography variant="h6" style={{marginTop: "2%", marginBottom: "1%"}}><b>Refleksi Iman</b></Typography>
                <Typography variant="body" style={{textAlign: "justify"}}>Di dalam mata kuliah ini, saya diajarkan bahwa komputer ataupun gadget yang saya gunakan sehari-hari yang begitu canggih itu ternyata terbagi-bagi atas beragam macam komponen, bahkan hingga ribuan. Beragam macam komponen yang berbeda-beda dan rumit itu ternyata bila disatukan maka akan menjadi suatu mesin komputer yang begitu sempurna.</Typography>
                <Typography style={{marginTop: "2%", marginBottom: "1%", textAlign: "justify"}}>Bila direfleksikan, organisasi dan arsitektur komputer ini mengingatkan pula saya akan gereja. Di dalam gereja, saya mengenal ada susunan hierarki dari paus hingga umat awam. Saya mempelajari bahwa semua anggota gereja itu memiliki perannya masing-masing dalam mengembangkan gereja Katolik yang kokoh dari dahulu hingga sekarang. Sama seperti processor yang merupakan otak dari suatu mesin komputer, Yesus adalah pemimpin dari gerejanya seperti sabdanya pada <b>Yohanes 15:5</b> berikut ini :</Typography>
                <Typography align="center" style={{marginTop: "2%", marginBottom: "1%", fontStyle: "italic"}}>"Akulah pokok anggur dan kamulah ranting-rantingnya. Barangsiapa tinggal di dalam Aku dan Aku di dalam dia, ia berbuah banyak, sebab di luar Aku kamu tidak dapat berbuat apa-apa." </Typography>
                <Typography style={{marginTop: "2%", marginBottom: "1%", textAlign: "justify"}}>Meskipun hanya sebagai umat awam, layaknya komponen komputer, ternyata aku juga memiliki peran yang besar dalam mengembangkan dan memajukan gereja sebagai anggotanya. Hal ini dijelaskan dengan jelas pada <b>Korintus 12:4-8</b> :</Typography>
                <Typography align="center" style={{marginTop: "2%", marginBottom: "1%", fontStyle: "italic"}}>"Ada rupa-rupa karunia, tetapi satu Roh. Dan ada rupa-rupa pelayanan, tetapi satu Tuhan. Dan ada berbagai-bagai perbuatan ajaib, tetapi Allah adalah satu yang mengerjakan semuanya dalam semua orang. Tetapi kepada tiap-tiap orang dikaruniakan penyataan Roh untuk kepentingan bersama. Sebab kepada yang seorang Roh memberikan karunia untuk berkata-kata dengan hikmat, dan kepada yang lain Roh yang sama memberikan karunia berkata-kata dengan pengetahuan." </Typography>
                <Typography style={{marginTop: "2%", marginBottom: "1%", textAlign: "justify"}}>
                Pada injil tersebut, aku merupakan salah satu 'karunia' yang ada di dalam gereja Kristus yang satu. Maka dari itu, aku harus dapat menjadi karunia Tuhan yang baik dan menjalankan peranku di dalam gereja dan di dalam masyarakat. Meskipun hanya dapat berbuat sedikit, namun perbuatan-perbuatan sedikit itulah yang akan kemudian memiliki peranan besar masing-masing dalam mempertahankan gereja.</Typography>
            </div>
        )
      case 5:
        return (
            <div>
                <Typography variant="h3" align="center" style={{marginTop: "2%", marginBottom: "1%"}}>Logika Komputasional</Typography>
                <Typography align="center">Logika Komputasional adalah ilmu Computer Science yang mempelajari mengenai logika proposisi dan logika relasional. Salah satu aplikasinya adalah pada pemrograman berparadigma deklaratif.</Typography>
                <Typography variant="h6" style={{marginTop: "2%", marginBottom: "1%"}}><b>Refleksi Iman</b></Typography>
                <Typography style={{textAlign: "justify"}}>Pada Mata Kuliah ini, saya banyak dipusingkan dengan pertanyaan-pertanyaan yang tentang kebenaran suatu hal. Apakah pernyataan X benar? Apakah pernyataan Y salah? Bagaimana mengubah bentuk pernyataan Z sehingga bernilai benar?</Typography>
                <Typography style={{marginTop: "2%", marginBottom: "1%", textAlign: "justify"}}>Sama seperti di dalam kehidupan sehari-hari, terkadang saya juga dihadapkan dengan persoalan-persoalan mengenai hal yang benar dan salah. Ketika menghadapi hal tersebut, kadang saya seringkali membuat rasionalisasi mengenai perbuatan saya yang sebenarnya salah. Misal ketika saya merasionalisasi bahwa menyontek ketika pembelajaran jarak jauh itu tidak apa-apa sebab toh dosennya tidak mengajarkan dengan baik. Banyak kasus-kasus seperti itu di mana aku tidak menggunakan hati nuraniku dengan baik dan hal itu mengingatkanku pada kutipan ayat berikut ini dari <b>1 Timotius 1:19</b> :</Typography>
                <Typography align="center" style={{fontSize: "1.1rem", marginTop: "2%", marginBottom: "1%", fontStyle: "italic"}}>"Beberapa orang telah menolak hati nuraninya yang murni itu, dan karena itu kandaslah iman mereka." </Typography>
                <Typography style={{marginTop: "2%", marginBottom: "1%", textAlign: "justify"}}>
                Oleh karena itu, saya harus terus mengasah hati nurani (Conscience) saya secara terus-menerus. Saya harus mampu membedakan yang benar dari yang salah dan yang baik dari yang buruk. Tentu saja saya juga tidak boleh terjebak pada rasionalisasi yang tidak berdasar dan segera kembali ke jalan yang benar.</Typography>
            </div>
        )
      case 6:
        return (
            <div>
                <Typography variant="h3" align="center" style={{marginTop: "2%", marginBottom: "1%"}}>Teori Bahasa Formal dan Otomata</Typography>
                <Typography align="center">Teori bahasa dan otomata merupakan bagian dari teori komputasi pada ilmu komputer. Beberapa teori komputasi datang dari bahasa dan rekayasa sistem, terutama yang berbasiskan matematika. Dalam hal ini penekanannya adalah pada pemecahan masalah. Melalui contoh-contoh ilustrasi-masalah dapat dikenali latar belakang dari suatu konsep dan hubungannya dengan definis dan teorema yang ada.</Typography>
                <Typography variant="h6" style={{marginTop: "2%", marginBottom: "1%"}}><b>Refleksi Iman</b></Typography>
                <Typography style={{textAlign: "justify"}}>Di Mata Kuliah ini, saya banyak belajar mengenai bahasa di dalam pemrograman. Ketika melihat suatu kode program yang kompleks dan kadang tidak jelas, yang sebenarnya kita lihat adalah bahasa pemrograman. Terdapat bahasa pemrograman C misalkan yang sering digunakan untuk membuat video Game, atau pun bahasa pemrograman python yang digunakan untuk analisis data. Dari semua kode yang diketik itu, ternyata ada satu komponen di dalam komputer yang berjasa agar instruksinya dapat dijalankan, yaitu compiler. Compiler bertugas untuk mengubah bahasa pemrograman high-level (yang dikenal manusia) menjadi bahasa mesin sehingga dapat dijalankan.</Typography>
                <Typography style={{marginTop: "2%", marginBottom: "1%", textAlign: "justify"}}>Belajar dari sebuah compiler, maka saya dapat belajar bahwa sebagai manusia, kita harus mau mengerti lebih dari pada mau dimengerti. Kita harus mau melayani dibandingkan dilayani. Yesus sendiri pernah berpesan tentang hal ini pada <b>Matius 20:28</b> berikut ini :</Typography>
                <Typography align="center" style={{marginTop: "2%", marginBottom: "1%", fontStyle: "italic"}}>"sama seperti Anak Manusia datang bukan untuk dilayani, melainkan untuk melayani dan untuk memberikan nyawa-Nya menjadi tebusan bagi banyak orang" </Typography>
                <Typography style={{marginTop: "2%", marginBottom: "1%", textAlign: "justify"}}>
                Oleh karena itu, layaknya Tuhan Yesus yang datang ke dunia untuk melayani dan bukan untuk dilayani, maka aku pun sebagai anak-Nya harus mau melayani dan bukannya dilayani, mengerti dan bukan mau dimengerti. Dengan mau untuk mengerti, mendengar, dan melayani orang lain, maka kehidupan kelak akan menjadi lancar dan tentram ketimbang apabila semuanya ingin dilayani dan didengar.</Typography>
            </div>
        )
      default:
        return 'Unknown step';
    }
}

function Profile() {
    const classes = useStyles();

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div className={classes.rootProfile}>
            <div className={classes.flexColumnCenter}>
                <Avatar alt="Remy Sharp" src={ProfilePicture} className={classes.avatar}/>
                <Typography variant="h6">Gregorius Dimas Baskara</Typography>
                <Typography>Web Developer</Typography>
            </div>
            <Divider style={{marginTop: "4%", marginLeft: "10%", marginRight: "10%"}}/>
            <div className={classes.flexColumnCenter}>
                <Typography variant="h4" className={classes.marginTop}>About Me</Typography>
                <Typography align="center" style={{marginLeft: "20%", marginRight: "20%", marginTop: "2%"}}>Hello, My Name is Gregorius Dimas Baskara. I'm a passionate Informatics student that has basic skills in Programming Languages, Web and Apps Development, Data Science, and Machine Learning. I really love to make Websites and Mobile Apps by implementing great designs and reliable databases. </Typography>
            </div>
            <Divider style={{marginTop: "4%", marginLeft: "10%", marginRight: "10%"}}/>
            <Hidden smDown>
                <Typography variant="h4" style={{marginTop: "5%", textAlign: "center", marginBottom: "2%"}}>EDUCATION</Typography>
            </Hidden>
            <Hidden mdUp>
                <Typography variant="h4" style={{marginTop: "5%", textAlign: "center", marginBottom: "2%"}}>EDUCATION</Typography>
            </Hidden>
            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />} className={classes.flexCenter}>
                {steps.map((label) => (
                <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}><Hidden smDown>{label}</Hidden></StepLabel>
                </Step>
                ))}
            </Stepper>
            <div className={classes.container}>  
                <div>
                    {activeStep === steps.length ? (
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                        <h6 style={{textAlign: "center", marginBottom: "3%"}}>
                        Begitulah Perjalanan Rohani Saya Selama Semester 3 di Program Studi Teknik Informatika ini. Segala manis dan pahit sudah dilewati dan diambil hikmahnya. Di kala pandemi ini meskipun kuliah daring dan kita seolah-olah terjebak di rumah masing-masing, kita masih tetap bisa menjadi harapan dan inspirasi bagi orang lain. Kita dapat membantu mereka yang kesulitan secara ekonomi selama pandemi ini. Kita pun juga dapat membantu tenaga medis dengan mengikuti protokol kesehatan. Meskipun sulit, namun percayalah bahwa selama masih ada iman, pengharapan, dan kasih, Tuhan masih akan selalu menyertai kita sampai akhir zaman. Akhir kata,  semoga tulisan pendek ini dapat memberikan inspirasi dan terima kasih telah membaca!
                        </h6>
                        <h6 style={{textAlign: "center", marginBottom: "3%", fontStyle: "italic", marginBlockEnd: 0}}>
                        "Ad Maiorem Dei Gloriam"
                        </h6>
                        <h6 style={{textAlign: "center", marginBottom: "3%", marginBlockStart: 0}}>
                        (Demi Semakin Lebih Besarnya Kemuliaan Tuhan)
                        </h6>
                        <h6 style={{textAlign: "center", marginBottom: "6%"}}>
                        - Santo Ignatius Loyola -
                        </h6>
                        <div>
                            <Button onClick={handleReset} className={classes.button}>
                            Ulang Kembali Kisah
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                            >
                                <a href="/About" className={classes.link}>Tentang Saya</a>
                            </Button>
                        </div>
                    </div>
                    ) : (
                    <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                        <div className={classes.instructions}>{getStepContent(activeStep)}</div>
                        <div>
                        <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                        >
                            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </Button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Profile
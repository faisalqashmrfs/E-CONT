import './Form.css';
import focal from './../../assets/image/Group1.png';
import focal2 from './../../assets/image/focalXaa2.png';
import trues from './../../assets/image/lets-icons_done-duotone.png';
import { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';

const options = [
  { value: 'Marketing', label: 'Marketing' },
  { value: 'Design', label: 'Design' },
  { value: 'UI/UX', label: 'UI/UX' },
  { value: 'Front-End BEG', label: 'Front-End BEG' },
  { value: 'Back-End BEG', label: 'Back-End BEG' },
  { value: 'Front-end ADV', label: 'Front-end ADV' },
  { value: 'Back-end ADV', label: 'Back-end ADV' },
  { value: 'MERN-stack Development ADV', label: 'MERN-stack Development ADV' },
  { value: 'Flutter BEG', label: 'Flutter BEG' },
  { value: 'Flutter ADV', label: 'Flutter ADV' },
];

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: '1',
    minHeight: 'unset',
    padding: '3px 40px',
    cursor:'pointer',
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: '#e0e0e0',
    borderRadius: '3px',
    width: '200px',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: '#333',
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: '#FF8500',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#FF8500',
      color: '#333',
    },
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
};
export default function Form() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);

  const [fileName, setFileName] = useState('ارفق صورة وجه أمامي لهويتك / جواز سفرك');
  const [File, setFile] = useState();
  const [name, setname] = useState();
  const [num, setnum] = useState();
  const [email, setemail] = useState();
  const [numberf, setnumberf] = useState();
  const [data, setData] = useState(null);
  const [IsChecked, setIsChecked] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (selected) => {
    if (selected.length <= 1) {
      setSelectedOptions(selected);
      setError('');
      setSelectedOptions2(selected.map(option => option.value))
    } else {
      alert("You can only select up to 1 options.");
    }
  };

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const HandelName = (event) => {
    setname(event.target.value)
    setError('');
  }
  const Handelemail = (event) => {
    setemail(event.target.value)
    setError('');
  }
  const HandelPHONE = (event) => {
    setnumberf(event.target.value)
    setError('');
  }

  const HandelNum = (event) => {
    setnum(event.target.value)
    setError('');
  }

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    setError('');
    console.log(IsChecked);
  };

  const handleFileUpload = async () => {
    localStorage.setItem('sended' , true)
    console.log(selectedOptions2);
    if (!name || !num || !IsChecked || selectedOptions2.length === 0) {
      setError(' الرجاء ملء جميع الحقول و الموافقة على الشروط');
      localStorage.removeItem('sended')
      return;
    }
    const formData =
    {
      full_name: name,
      id_number: num,
      phone: '0912312312',
      email: 'email@ASDD.com',
      specialization: selectedOptions2,
      full_name: name,
      approval: 1,
    }

    const config = {

      headers: {
        'Content-Type': 'multipart/form-data',
      }
    };
    console.log(formData);
    await axios.post('https://internships.focal-x.com/api/contract', formData, config)
      .then(response => {
        console.log(response.data);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 8000);
      })
      .catch(error => {
        console.error(error);
        const send = localStorage.getItem('sended')
      });
    setError('');
  };

  const send = localStorage.getItem('sended')
  return (
    <section className='Form'>
      <nav className='NavBar'>
        <img src={focal} alt="" />
        <h2 style={{ marginLeft: '-25px' }}>Learn .. And Have Fun</h2>
        <img src={focal2} alt="" />
      </nav>
      <main className={showSuccess ? 'blue' : ''}>
        <div className='Content'>
          <div className='ph1'></div>
          <div className='ph2'></div>
        </div>
        <div className='Form-fq'>
          <h2>عقد تدريب الكتروني</h2>
          <p className='p'><span style={{ fontWeight: '600' }}>الطرف الأول</span>: شركة فوكال اكس (نقطة الارتكاز محدودة المسؤولية)  |  سجل تجاري رقم 10062  |   العنوان الرئيسي: سوريا - اللاذقية</p>
          <p className='p2'><span style={{ fontWeight: '600' }}>الطرف الثاني</span>: المتدرب صاحب المعلومات التالية:</p>
          <form action="">
            {/* <input type="text" value={numberf} onChange={HandelPHONE} className='input' placeholder='رقم الهاتف ' /> */}
            {/* <input type="text" value={email} onChange={Handelemail} className='input' placeholder='البريد الإلكتروني' /> */}
            <div>
              <Select
                isMulti
                placeholder="اختر اختصاص"
                value={selectedOptions}
                onChange={handleChange}
                options={options}
                closeMenuOnSelect={true}
                hideSelectedOptions={true}
                styles={customStyles}

                components={{
                  MultiValue: ({ data, removeProps }) => (
                    <div className="tag">
                      {data.label}
                    </div>
                  )
                }}
              /></div>
            <input type="text" value={num} onChange={HandelNum} className='input' placeholder='الرقم الوطني / جواز السفر' />
            <input type="text" value={name} onChange={HandelName} className='input' placeholder='الاسم الكامل باللغة العربية ( الثلاثي )' />
          </form>
          <div>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <p className='asddvv-sdfsdf-sdf-sdf'>.موافقتك على وثيقة الشروط والأحكام هي بمثابة توقيعك عقد معنا ، يرجى قراءتها بعناية</p>
          <section className='Content-if-requer'>
            <div className='scroling'>
              <p>التزم بما يلي:</p>
              <p>-  جميع مراحل التدريب (النظري – التفاعلي – العملي – مشروع التخرج) والذي يستمر لمدة أربعة أشهر وذلك اعتباراً من تاريخ 1/8/2024م، ويحق للطرف الأول تمديد هذه المدة لشهر واحد تبعاً للأعطال
                الرسمية والأعياد وعطل المراجعة اللازمة للتدريب التي يقررها الطرف الأول.</p>
              <p>-  حضور الجلسات النظرية في مواعيدها وفقاً لاختصاص تدريبي والمحددة في الملف الرسمي للتدريب.</p>
              <p>-  القيام بالمهام والمسؤوليات (التدريب العملي) التي تحدد من قبل فريق التدريب وفقاً لاختصاص تدريبي وتسليم المهام في الوقت المحدد (من قبل فريق التدريب) بدون تأخير عن الموعد.</p>
              <p>-  التواجد على كافة منصات التواصل الاجتماعي المطلوبة في عملية التدريب.</p>
              <p>- عدم الانخراط في أي نقاش سياسي أو ديني أو عنصري أثناء التدريب لدى الطرف الأول، ويمنع منعاً باتاً أي نوع من أنواع التنمر أو العنصرية أو التحرش الجنسي سواء كان بدني أو لفظي أو الكتروني.</p>
              <p>-  سرية المنهاج التعليمي ويشمل ذلك دونما حصر (تسجيل الجلسات النظرية – الملخصات – الروابط –   الأعمال والمهام) وعدم مشاركتها مع أي أطراف خارجية خلال أو بعد انتهاء التدريب.</p>
              <p>-  الأنظمة واللوائح الداخلية والقرارات والتعليمات المعتمدة لدى الطرف الأول.</p>
              <p>- الإقرار بأن حقوق الملكية الفكرية وحقوق المؤلف للأعمال التي قمت بتنفيذها خلال هذا العقد تعود ملكيتها الفكرية للطرف الأول ويشمل ذلك دونما حصر البرمجيات والتطبيقات والأنظمة والدراسات والأبحاث ومواد التدريب وبراءات الاختراع والنماذج والرسوم الصناعة والتصاميم الهندسية وما في حكمها.</p>
              <p>-  معايير السلوك الوظيفي القويم الذي يتفق مع طبيعة تدريبي.</p>
              <p>-  تجنب أي تضارب في المصالح سببه نشاطاتي كعملي الحر أو عملي لدى مؤسسات أخرى.</p>
              <p>-المحافظة وعدم الإفصاح أو الكشف عن أية معلومات خطيّة كانت أو شفهيّة، سريّة كانت بطبيعتها أو محتواها أو بحكم الضوابط والتعليمات الصادرة بشأنها سواء كانت هذه المعلومات تخص الشركة أو أية شركة أخرى دون الحصول على إذن خطي صريح ومسبق بذلك من الإدارة.</p>
              <p>-عدم نقل مضمون أو ملكية أي ملف أو مشروع مملوك للشركة أو تعديله أو ترجمته أو نسخه أو نشره أو تصويره دون الحصول على إذن خطي صريح ومسبق بذلك من الإدارة.</p>
              <p>-المحافظة على الممتلكات المادية والفكرية الخاصة بالطرف الأول، والمحافظة على ملفات وسجلات العمل والمتعاملين بطريقة صحيحة وآمنة والحفاظ على أمن وسلامة وسائل ووسائط الاتصال الإلكترونية وعدم استخدامها لأغراض شخصيّة أو تخرج عن نطاق العمل أو بصورة تمكن أطراف خارجية من الاطلاع غير المصرح به على أنظمة معلومات الشركة.</p>
              <p>-إعادة وتسليم كافة ما في عهدتي من الوثائق والملفات والمواد والأجهزة أو أية ممتلكات أخرى ذات صلة بعملي تخص الشركة سواء كانت سرية أم لا عند انتهاء التدريب، ويتضمن ذلك المواد التي تعود لأطراف أخرى حصلت عليها في سياق القيام بمهام ومشاريع التدريب عند الانتهاء خدمتي أو عند نقلي لمشروع آخر لا يتطلب ابقائها بحوزتي.</p>
              <p>-إزالة كافة المعلومات والبيانات التي تعود بملكيتها إلى الشركة بشكل نهائي وغير قابل للاستعادة من كافة وسائط التخزين سواء كانت في حيازتي أو تحت تصرفي وذلك عند انتهاء التدريب وفقاً للطريقة التي تقرها الإدارة.</p>
              <p>-عدم الاشتراك في عملية أو محادثة أو قرار بهدف تعطيل أو تضييق مصالح المتعاملين أو المتدربين الذين تجمعهم به عداوة سابقة أو مشاعر بُغض أو لأسباب عنصرية أو غيرها.</p>
              <p>- دفع كافة المستحقات المالية في موعدها وكما تم الاتفاق عليه.</p>
              <p>-في حال مخالفتي لأي من التزاماتي المذكورة في هذا العقد، وبعد إرسال الطرف الأول إنذار لي عند المخالفة الأولى، وفي حال الاستمرار بالمخالفة بعد التنبيه، يحق للطرف الأول إنهاء العقد أثناء مدة سريانه شريطة إخطاري بذلك خطياً قبل 5 أيام عمل من تاريخ الإنهاء، ولا يترتب على الطرف الأول أية التزامات مالية أو غيرها عند فسخ العقد.</p>
              <p>- يحق لي الانسحاب من التدريب شريطة إخطار الطرف الأول بذلك قبل 10 أيام عمل، ولا يترتب على الطرف الأول أية التزامات مالية أو غيرها عند انسحاب الطرف الثاني.</p>
              <p>- في حال إخلالي بأي من الالتزامات المشار إليها أعلاه فإنه يحق للطرف الأول أن يتخذ قرار الفصل من التدريب وكافة الإجراءات القانونية السارية في الجمهورية العربية السورية أو في أي دولة يوجد فيها الطرف الأول.</p>
            </div>
            <div className='sm-foter'>
             <button onClick={handleFileUpload}>إرسال</button>
              <p>.أوافق على وثيقة الشروط والأحكام وموافقتي وكتابة اسمي الكامل يُعتبر توقيع على العقد معكم والتزامي بشروط التدريب</p>
              <label className="checkbox-container">
                <input type="checkbox" checked={IsChecked} onChange={handleCheckboxChange} />
                <span className="checkmark"></span>
              </label>
            </div>
          </section>
        </div>

      </main>
      {showSuccess && <div className="success-message">
        <img src={trues} alt="" />
        <p>اكتملت إجراءات التسجيل</p>
        <p>سيصلك ملف pdf للعقد على تطبيق Whatsapp</p>
        <p>خلال 48 ساعة عمل</p>
        <p>شكرا لكم</p>
      </div>}
    </section>
  )
}

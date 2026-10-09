/**
 * GRURU MUSEUM — Executive Presentation & Interactive Engines
 * Future Archaeology: "New Knowledge. New Storytelling. Built for Everyday Living."
 */

// --- Audio Synthesizer (Web Audio API) ---
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, this.ctx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch(e) {}
  }

  playBoom() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      // Sub-bass sweep
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(35, this.ctx.currentTime + 0.35);
      gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.4);

      // Cyber chime
      const chime = this.ctx.createOscillator();
      const chimeGain = this.ctx.createGain();
      chime.type = 'sine';
      chime.frequency.setValueAtTime(1200, this.ctx.currentTime + 0.04);
      chime.frequency.exponentialRampToValueAtTime(1760, this.ctx.currentTime + 0.2);
      chimeGain.gain.setValueAtTime(0.08, this.ctx.currentTime + 0.04);
      chimeGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.3);
      chime.connect(chimeGain);
      chimeGain.connect(this.ctx.destination);
      chime.start(this.ctx.currentTime + 0.04);
      chime.stop(this.ctx.currentTime + 0.3);
    } catch(e) {}
  }

  playPing() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1320, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch(e) {}
  }
}

const sounds = new SoundEngine();

// --- Executive Notes Content ---
const presenterNotes = {
  0: `<h3>HALL 00: EXECUTIVE OVERVIEW</h3>
      <p><strong>วัตถุประสงค์สไลด์:</strong> แนะนำแก่นวิสัยทัศน์ของ GRURU MUSEUM ในฐานะ Brand & Digital Museum แห่งแรกที่ผสมผสาน Modern Art + Sci-Fi Lab ภายใต้แนวคิด "Future Archaeology"</p>
      <p><strong>Executive Talking Points:</strong></p>
      <ul>
        <li>อดีตคือข้อมูล อนาคตคือเรื่องเล่า (Past Warm × Future Electric)</li>
        <li>แก้ Pain Point ของคนยุคนี้ที่ต้องการความรู้ลึกกว่าคลิปสั้น แต่ไม่อยากนั่งเรียน</li>
        <li>ทุกเรื่องจบด้วย Everyday Takeaway ที่นำไปใช้ได้จริงทันที</li>
      </ul>`,
  1: `<h3>HALL 01: MARKET GAP & POSITIONING</h3>
      <p><strong>วัตถุประสงค์สไลด์:</strong> ชี้ให้เห็น White Space ในตลาด (3 วินาทีเข้าใจทันที)</p>
      <p><strong>Executive Talking Points:</strong></p>
      <ul>
        <li>วิกฤตสองขั้ว: วิกิพีเดียน่าเบื่อ/แห้งแล้ง vs TikTok ผิวเผิน/ไม่มีแหล่งอ้างอิง</li>
        <li>GRURU ยืนในช่องว่างที่ไร้คู่แข่ง: "สนุก มีหลักฐานอ้างอิง 100% และเป็นเครือข่ายความรู้ที่สำรวจได้"</li>
        <li>Perceptual Map บ่งบอก ROI และ Brand Stickiness ที่สูงกว่า</li>
      </ul>`,
  2: `<h3>HALL 02: 5-STAGE PIPELINE</h3>
      <p><strong>วัตถุประสงค์สไลด์:</strong> แสดงระบบมาตรฐาน 5 ขั้น (Pipeline) ที่แปลงข้อมูลอดีตสู่ชีวิตประจำวัน</p>
      <p><strong>Executive Talking Points:</strong></p>
      <ul>
        <li>Excavate ➔ Decode ➔ Retell ➔ Connect ➔ Apply</li>
        <li>ไม่ใช่แค่เว็บอ่านบทความ แต่คือ Knowledge OS ที่นำโครงสร้างข้อมูลไปต่อยอดได้มหาศาล</li>
        <li>การ์ด Everyday Takeaway เป็นหัวใจในการสร้าง Viral Engagement</li>
      </ul>`,
  3: `<h3>HALL 03: MULTI-SOURCE KNOWLEDGE GRAPH</h3>
      <p><strong>วัตถุประสงค์สไลด์:</strong> เจาะลึกโครงข่ายข้อมูลแบบเชื่อมโยงรอบด้าน</p>
      <p><strong>Executive Talking Points:</strong></p>
      <ul>
        <li>ดึงและสังเคราะห์ข้อมูลจาก 4 แหล่ง: Books, Textbooks, Databases, Community Knowledge</li>
        <li>Cross-Domain Connections: เชื่อมชีววิทยา ประวัติศาสตร์ และเทคโนโลยีเข้าด้วยกัน</li>
        <li>รองรับทั้ง AI-driven Semantic Search และ Interactive Visual Mapping</li>
      </ul>`,
  4: `<h3>HALL 04: DATA BOOMING (DEMO)</h3>
      <p><strong>วัตถุประสงค์สไลด์:</strong> นำเสนอ Signature Feature อันดับหนึ่ง ที่ทำให้เข้าใจโครงสร้างใน 3 วินาที</p>
      <p><strong>Executive Talking Points:</strong></p>
      <ul>
        <li>คลิกที่โหนดเพื่อดูการ "ระเบิด" ความรู้แบบเรเดียลทีละชั้น (สูงสุด 3 ชั้น)</li>
        <li>ช่วยให้ผู้ใช้เห็นความเชื่อมโยงของสิ่งรอบตัว เช่น กาแฟ ➔ การปฏิวัติอุตสาหกรรม ➔ โดปามีน ➔ ชีวิตเรา</li>
        <li>ทดลองคลิกปุ่ม "EXPLODE / BOOM" ในหน้าจอได้ทันที</li>
      </ul>`,
  5: `<h3>HALL 05: INTERACTIVE FORCE GRAPH</h3>
      <p><strong>วัตถุประสงค์สไลด์:</strong> แสดงแผนที่ความรู้แบบ Force-Directed ฉบับเต็ม พร้อม HUD Specimen Card</p>
      <p><strong>Executive Talking Points:</strong></p>
      <ul>
        <li>แบ่ง 6 หมวดด้วยรูปทรงและสีมาตรฐาน WCAG AA (เป็นมิตรกับผู้มองเห็นสีบกพร่อง)</li>
        <li>มี Slider เลื่อนยุคสมัย (Ancient ถึง Modern) และค้นหาแบบ Real-time</li>
        <li>การ์ดพิพิธภัณฑ์ Specimen Label (GRM-XXXX) บอกที่มาและวิธีนำไปใช้จริง</li>
      </ul>`,
  6: `<h3>HALL 06: TARGET PERSONAS & VALUE</h3>
      <p><strong>วัตถุประสงค์สไลด์:</strong> วิเคราะห์กลุ่มเป้าหมายอายุ 22-40 ปี เพื่อสร้างกลยุทธ์เติบโตที่แม่นยำ</p>
      <p><strong>Executive Talking Points:</strong></p>
      <ul>
        <li>Curious Starter (22-27): Mobile-first, การ์ดโซเชียล 1080×1350 px</li>
        <li>Creative Professional (25-34): แหล่งข้อมูลอ้างอิง, เซฟคอลเลกชัน, ส่งเสริมนวัตกรรม</li>
        <li>Lifelong Learner (30-40): ความน่าเชื่อถือ, สุขภาพ, Everyday Takeaway ในครอบครัว</li>
      </ul>`,
  7: `<h3>HALL 07: ROADMAP & ANTIGRAVITY DEV</h3>
      <p><strong>วัตถุประสงค์สไลด์:</strong> แผนปฏิบัติการ 4 เฟสพร้อมส่งต่อให้ Google Antigravity พัฒนาทันที</p>
      <p><strong>Executive Talking Points:</strong></p>
      <ul>
        <li>Stack ที่พร้อมผลิต: Next.js + Tailwind CSS + D3.js + TypeScript</li>
        <li>Phase 1 Token System & Style Guide ผ่าน WCAG AA พร้อมรัน</li>
        <li>ขออนุมัติงบและทิศทางเพื่อเริ่ม Launch ตามไทม์ไลน์</li>
      </ul>`
};

// --- Presentation State ---
class PresentationController {
  constructor() {
    this.currentSlide = 0;
    this.totalSlides = document.querySelectorAll('.slide').length;
    this.slides = document.querySelectorAll('.slide');
    this.progressFill = document.getElementById('progress-fill');
    this.slideCounter = document.getElementById('slide-counter');
    this.hallPills = document.querySelectorAll('.hall-pill');
    this.notesDrawer = document.getElementById('exec-notes-drawer');
    this.notesContent = document.getElementById('drawer-notes-content');

    this.init();
  }

  init() {
    this.updateUI();
    this.setupEvents();
  }

  setupEvents() {
    // Nav buttons
    document.getElementById('btn-prev').addEventListener('click', () => this.prevSlide());
    document.getElementById('btn-next').addEventListener('click', () => this.nextSlide());

    // Hall pills
    this.hallPills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        const slideIdx = parseInt(e.currentTarget.dataset.slide, 10);
        this.goToSlide(slideIdx);
      });
    });

    // Keyboard Shortcuts
    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        this.nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        this.prevSlide();
      } else if (e.key.toLowerCase() === 'f') {
        this.toggleFullscreen();
      } else if (e.key.toLowerCase() === 'n') {
        this.toggleNotes();
      } else if (e.key.toLowerCase() === 'b') {
        this.goToSlide(4); // Data Booming
      } else if (e.key.toLowerCase() === 'g') {
        this.goToSlide(5); // Knowledge Graph
      } else if (e.key.toLowerCase() === 'm') {
        this.toggleSound();
      }
    });

    // Sound toggle
    const soundBtn = document.getElementById('btn-sound-toggle');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => this.toggleSound());
    }

    // Notes drawer toggle
    const notesBtn = document.getElementById('btn-notes-toggle');
    if (notesBtn) {
      notesBtn.addEventListener('click', () => this.toggleNotes());
    }
    const closeDrawerBtn = document.getElementById('btn-close-drawer');
    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener('click', () => this.toggleNotes(false));
    }

    // Fullscreen toggle
    const fsBtn = document.getElementById('btn-fullscreen');
    if (fsBtn) {
      fsBtn.addEventListener('click', () => this.toggleFullscreen());
    }
  }

  toggleSound() {
    const isEnabled = sounds.toggle();
    const soundBtn = document.getElementById('btn-sound-toggle');
    if (soundBtn) {
      soundBtn.innerHTML = isEnabled ? `<span>🔊</span> SOUND: ON` : `<span>🔇</span> SOUND: OFF`;
      soundBtn.style.color = isEnabled ? 'var(--gr-lime)' : 'var(--gr-fog)';
    }
    if (isEnabled) sounds.playPing();
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  }

  toggleNotes(forceState) {
    if (!this.notesDrawer) return;
    const isOpen = typeof forceState === 'boolean' ? forceState : !this.notesDrawer.classList.contains('open');
    if (isOpen) {
      this.notesDrawer.classList.add('open');
      sounds.playClick();
    } else {
      this.notesDrawer.classList.remove('open');
    }
  }

  goToSlide(index) {
    if (index < 0 || index >= this.totalSlides) return;
    sounds.playClick();
    this.currentSlide = index;
    this.updateUI();
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.goToSlide(this.currentSlide + 1);
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.goToSlide(this.currentSlide - 1);
    }
  }

  updateUI() {
    this.slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === this.currentSlide);
    });

    // Hall pills active state
    this.hallPills.forEach(pill => {
      const target = parseInt(pill.dataset.slide, 10);
      pill.classList.toggle('active', target === this.currentSlide);
    });

    // Counter & Progress
    const pct = ((this.currentSlide + 1) / this.totalSlides) * 100;
    if (this.progressFill) this.progressFill.style.width = `${pct}%`;
    if (this.slideCounter) {
      const currentFormatted = String(this.currentSlide + 1).padStart(2, '0');
      const totalFormatted = String(this.totalSlides).padStart(2, '0');
      this.slideCounter.textContent = `SLIDE ${currentFormatted} / ${totalFormatted}`;
    }

    // Update Presenter Notes
    if (this.notesContent) {
      this.notesContent.innerHTML = presenterNotes[this.currentSlide] || `<p>ไม่มีบันทึกเพิ่มเติมสำหรับหน้านี้</p>`;
    }

    // Text Scramble / Decode effect on active slide title
    const activeSlide = this.slides[this.currentSlide];
    if (activeSlide) {
      const titleElem = activeSlide.querySelector('.slide-title');
      if (titleElem && !titleElem.dataset.decoded) {
        this.scrambleDecode(titleElem);
      }
    }

    // Trigger canvas resize if switching into Booming or Graph slide
    if (this.currentSlide === 4 && window.boomingEngine) {
      window.boomingEngine.resize();
    }
    if (this.currentSlide === 5 && window.graphEngine) {
      window.graphEngine.resize();
    }
  }

  scrambleDecode(element) {
    const originalText = element.textContent;
    const chars = '01#%*+~ΞΔΩ§¢£¥GRURU2026';
    let iterations = 0;
    const interval = setInterval(() => {
      element.innerText = originalText
        .split('')
        .map((char, index) => {
          if (char === ' ' || char === '\n') return char;
          if (index < iterations) return originalText[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join('');

      if (iterations >= originalText.length) {
        clearInterval(interval);
        element.textContent = originalText;
        element.dataset.decoded = "true";
      }
      iterations += 2;
    }, 28);
  }
}

// --- DATA BOOMING ENGINE ---
class DataBoomingEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.nodes = [];
    this.particles = [];
    this.currentTier = 1;
    this.maxTier = 3;
    this.activeNodeCount = 1;
    this.selectedNode = null;
    this.animId = null;

    // Seed Data Tree for Data Booming
    this.treeData = {
      id: 'root',
      label: 'กาแฟ & ชีวเคมี (Coffee)',
      category: 'science',
      color: '#D7FF3A',
      era: 'ศตวรรษที่ 9 – ปัจจุบัน',
      desc: 'จากผลเบอร์รีป่าในเอธิโอเปีย สู่โมเลกุลที่ขับเคลื่อนการปฏิวัติอุตสาหกรรมและพฤติกรรมมนุษย์ทุกเช้า',
      takeaway: 'ดื่มน้ำ 1 แก้วก่อนกาแฟ และรอ 90 นาทีหลังตื่นนอนเพื่อลด Adenosine Crash',
      children: [
        {
          id: 'c1',
          label: 'Adenosine Receptors',
          category: 'science',
          color: '#2EE6FF',
          era: 'ชีวเคมีสมอง',
          desc: 'คาเฟอีนมีโครงสร้างคล้ายอะดีโนซีน จึงเข้าจับตัวรับแทนที่ ทำให้สมองไม่รู้สึกง่วง',
          takeaway: 'การนอนหลับลึกเท่านั้นที่ช่วยชะล้างอะดีโนซีน คาเฟอีนเพียงแค่ยืมเวลา',
          children: [
            { id: 'c1-1', label: 'Dopamine Signaling', category: 'science', color: '#2EE6FF', era: 'ระบบรางวัล', desc: 'เพิ่มการส่งสัญญาณโดปามีน ทำให้มีสมาธิและอารมณ์ดีขึ้น', takeaway: 'จับคู่งานที่ต้องใช้ความคิดสร้างสรรค์กับช่วงพีค 45 นาทีหลังดื่ม' },
            { id: 'c1-2', label: 'Circadian Rhythm', category: 'nature', color: '#34E89E', era: 'นาฬิกาชีวภาพ', desc: 'คอร์ติซอลจะหลั่งสูงสุดตอน 8:00 น. ดื่มกาแฟตอน 9:30 น. จะมีประสิทธิภาพสูงสุด', takeaway: 'เลี่ยงกาแฟหลัง 14:00 น. เพื่อรักษาวงจร REM sleep' }
          ]
        },
        {
          id: 'c2',
          label: 'ตำนานแพะคาลดี (Kaldi)',
          category: 'history',
          color: '#FF5A1F',
          era: 'ศตวรรษที่ 9 (เอธิโอเปีย)',
          desc: 'คนเลี้ยงแพะสังเกตเห็นแพะกระโดดโลดเต้นหลังกินผลไม้สีแดง จึงนำไปให้นักพรตทดลองต้ม',
          takeaway: 'การสังเกตสิ่งเล็กๆ รอบตัวที่ผิดปกติคือจุดกำเนิดของนวัตกรรมที่เปลี่ยนโลก',
          children: [
            { id: 'c2-1', label: 'พิธีกรรมซูฟี (Sufism)', category: 'culture', color: '#FFC233', era: 'เยเมน ศตวรรษที่ 15', desc: 'นักพรตซูฟีดื่มกาแฟเพื่อสวดมนต์ได้ตลอดทั้งคืน', takeaway: 'พิธีกรรมสร้างความหมายให้เครื่องดื่มธรรมดา' },
            { id: 'c2-2', label: 'ท่าเรือมอคคา (Mocha)', category: 'history', color: '#FF5A1F', era: 'ศูนย์กลางการค้ากาแฟ', desc: 'ผูกขาดการส่งออกกาแฟทั่วโลกกว่า 200 ปี', takeaway: 'ช่องทางการกระจายสินค้าคืออำนาจทางยุทธศาสตร์' }
          ]
        },
        {
          id: 'c3',
          label: 'Penny Universities',
          category: 'culture',
          color: '#FFC233',
          era: 'ลอนดอน ปี 1650-1700',
          desc: 'ร้านกาแฟกลายเป็นแหล่งแลกเปลี่ยนความรู้ เสียค่าเข้า 1 เพนนีเพื่อสนทนากับนักปราชญ์',
          takeaway: 'พื้นที่สนทนาที่มีกาแฟเป็นตัวเร่งปฏิกิริยา ก่อกำเนิดทั้งตลาดหลักทรัพย์และ Royal Society',
          children: [
            { id: 'c3-1', label: 'การปฏิวัติทางปัญญา (Enlightenment)', category: 'culture', color: '#FFC233', era: 'ยุโรปศตวรรษที่ 18', desc: 'เปลี่ยนจากการดื่มเบียร์มึนเมาในโรงเตี๊ยมสู่การตื่นรู้และถกเถียงด้วยเหตุผล', takeaway: 'เปลี่ยนสิ่งแวดล้อมเพื่อเปลี่ยนระดับความคิด' }
          ]
        },
        {
          id: 'c4',
          label: 'การปฏิวัติอุตสาหกรรม',
          category: 'tech',
          color: '#8C6BFF',
          era: 'ศตวรรษที่ 18-19',
          desc: 'นาฬิกาโรงงานและกาแฟเปลี่ยนจังหวะชีวิตคนจากการพึ่งพาแสงอาทิตย์มาเป็นกะการทำงาน 24 ชั่วโมง',
          takeaway: 'จังหวะการทำงานปัจจุบันถูกสร้างขึ้นเมื่อ 200 ปีก่อน ไม่ใช่ข้อจำกัดทางธรรมชาติ',
          children: [
            { id: 'c4-1', label: 'Espresso Machine 1901', category: 'tech', color: '#8C6BFF', era: 'มิลาน อิตาลี', desc: 'หลุยจิ เบซเซรา ประดิษฐ์เครื่องชงด้วยแรงดันไอน้ำเพื่อลดเวลาพักของคนงาน', takeaway: 'เทคโนโลยีตอบโจทย์ความเร็วเพื่อประสิทธิภาพการผลิต' }
          ]
        },
        {
          id: 'c5',
          label: 'ปฏิกิริยาเมลลาร์ด (Maillard)',
          category: 'science',
          color: '#2EE6FF',
          era: 'เคมีการคั่ว',
          desc: 'กรดอะมิโนทำปฏิกิริยากับน้ำตาลที่ 140-165°C ก่อกำเนิดกลิ่นหอมกว่า 800 ชนิดในเมล็ดกาแฟ',
          takeaway: 'ความร้อนและเวลาที่แม่นยำเปลี่ยนวัตถุดิบธรรมดาให้เป็นศิลปะ',
          children: []
        },
        {
          id: 'c6',
          label: 'Third Wave & Direct Trade',
          category: 'art',
          color: '#FF5FA2',
          era: 'ยุค 2000s - ปัจจุบัน',
          desc: 'ยกระดับกาแฟเป็นงานคราฟต์ บอกแหล่งปลูก แปรรูป และให้ความเป็นธรรมแก่เกษตรกร',
          takeaway: 'ผู้บริโภคยุคใหม่ให้คุณค่ากับความโปร่งใสและเรื่องราวเบื้องหลังผลิตภัณฑ์',
          children: []
        }
      ]
    };

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.reset();
    this.setupInteractions();
    this.animate();
  }

  resize() {
    if (!this.canvas) return;
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
    this.canvas.width = this.width * window.devicePixelRatio;
    this.canvas.height = this.height * window.devicePixelRatio;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  reset() {
    this.nodes = [];
    this.particles = [];
    this.currentTier = 1;
    this.activeNodeCount = 1;

    // Root Node
    const rootNode = {
      id: this.treeData.id,
      label: this.treeData.label,
      category: this.treeData.category,
      color: this.treeData.color,
      era: this.treeData.era,
      desc: this.treeData.desc,
      takeaway: this.treeData.takeaway,
      x: this.width / 2,
      y: this.height / 2,
      targetX: this.width / 2,
      targetY: this.height / 2,
      radius: 34,
      tier: 1,
      glowRadius: 28,
      isRoot: true,
      expanded: false,
      pulse: 0
    };

    this.nodes.push(rootNode);
    this.selectedNode = rootNode;
    this.updateHUD();
  }

  boom() {
    sounds.playBoom();
    const root = this.nodes[0];
    if (!root.expanded) {
      // Tier 1 -> Tier 2 Radial Burst
      root.expanded = true;
      this.currentTier = 2;
      const count = this.treeData.children.length;
      const radius = Math.min(this.width, this.height) * 0.35;

      this.treeData.children.forEach((child, i) => {
        const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
        const targetX = root.x + Math.cos(angle) * radius;
        const targetY = root.y + Math.sin(angle) * radius;

        const node = {
          id: child.id,
          label: child.label,
          category: child.category,
          color: child.color,
          era: child.era,
          desc: child.desc,
          takeaway: child.takeaway,
          childrenData: child.children,
          x: root.x,
          y: root.y,
          targetX,
          targetY,
          radius: 20,
          tier: 2,
          parent: root,
          expanded: false,
          pulse: 0
        };

        // Delay staggered arrival (40ms steps)
        setTimeout(() => {
          this.nodes.push(node);
          this.activeNodeCount = this.nodes.length;
          this.spawnBurstParticles(node.x, node.y, node.color);
          this.updateHUD();
        }, i * 45);
      });

      this.spawnShockwave(root.x, root.y, '#D7FF3A');
    } else if (this.currentTier === 2) {
      // Tier 2 -> Tier 3 Full Burst
      this.currentTier = 3;
      const tier2Nodes = this.nodes.filter(n => n.tier === 2);
      tier2Nodes.forEach((parent, pIdx) => {
        if (parent.childrenData && parent.childrenData.length > 0) {
          parent.expanded = true;
          const subCount = parent.childrenData.length;
          parent.childrenData.forEach((sub, sIdx) => {
            const angleOffset = ((sIdx - (subCount - 1) / 2) * 0.5);
            const parentAngle = Math.atan2(parent.y - root.y, parent.x - root.x);
            const angle = parentAngle + angleOffset;
            const dist = 90;

            const subNode = {
              id: sub.id,
              label: sub.label,
              category: sub.category,
              color: sub.color,
              era: sub.era,
              desc: sub.desc,
              takeaway: sub.takeaway,
              x: parent.x,
              y: parent.y,
              targetX: parent.x + Math.cos(angle) * dist,
              targetY: parent.y + Math.sin(angle) * dist,
              radius: 14,
              tier: 3,
              parent: parent,
              expanded: false,
              pulse: 0
            };

            setTimeout(() => {
              this.nodes.push(subNode);
              this.activeNodeCount = this.nodes.length;
              this.spawnBurstParticles(subNode.x, subNode.y, subNode.color);
              this.updateHUD();
            }, (pIdx * 100) + (sIdx * 40));
          });
        }
      });
      this.spawnShockwave(root.x, root.y, '#2EE6FF');
    } else {
      // Already max tier, reset and boom again
      this.reset();
      setTimeout(() => this.boom(), 100);
    }
  }

  spawnShockwave(x, y, color) {
    for (let r = 0; r < 3; r++) {
      this.particles.push({
        type: 'shockwave',
        x, y,
        radius: 10 + r * 15,
        maxRadius: Math.min(this.width, this.height) * 0.5,
        color,
        alpha: 0.9,
        speed: 12 + r * 3
      });
    }
  }

  spawnBurstParticles(x, y, color) {
    for (let i = 0; i < 14; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 4 + 2;
      this.particles.push({
        type: 'dot',
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 3 + 1.5,
        color,
        alpha: 1,
        life: 1
      });
    }
  }

  updateHUD() {
    const counterElem = document.getElementById('booming-node-count');
    const tierElem = document.getElementById('booming-tier-indicator');
    const labelElem = document.getElementById('booming-active-label');
    const takeawayElem = document.getElementById('booming-takeaway-card');

    if (counterElem) counterElem.textContent = `${this.nodes.length} KNOWLEDGE NODES`;
    if (tierElem) tierElem.textContent = `EXPLOSION DEPTH: TIER ${this.currentTier} / ${this.maxTier}`;

    if (this.selectedNode && labelElem) {
      labelElem.innerHTML = `
        <span style="color: ${this.selectedNode.color}">●</span> 
        <strong>${this.selectedNode.label}</strong> 
        <span style="color: var(--gr-fog)">[${this.selectedNode.era}]</span>
      `;
    }

    if (this.selectedNode && takeawayElem) {
      takeawayElem.innerHTML = `
        <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--gr-lime); margin-bottom: 4px;">
          ✦ EVERYDAY TAKEAWAY
        </div>
        <div style="font-size: 0.88rem; color: var(--gr-paper); font-weight: 500;">
          ${this.selectedNode.takeaway}
        </div>
        <div style="font-size: 0.78rem; color: var(--gr-fog); margin-top: 6px;">
          ${this.selectedNode.desc}
        </div>
      `;
    }
  }

  setupInteractions() {
    this.canvas.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let clickedNode = null;
      for (let i = this.nodes.length - 1; i >= 0; i--) {
        const n = this.nodes[i];
        const dist = Math.hypot(n.x - mouseX, n.y - mouseY);
        if (dist <= n.radius + 12) {
          clickedNode = n;
          break;
        }
      }

      if (clickedNode) {
        this.selectedNode = clickedNode;
        sounds.playPing();
        this.updateHUD();
        // If clicking root or unexpanded node, trigger boom
        if (clickedNode.isRoot || (clickedNode.childrenData && clickedNode.childrenData.length > 0)) {
          this.boom();
        }
      } else {
        // Trigger next explosion
        this.boom();
      }
    });

    const boomBtn = document.getElementById('btn-boom-action');
    if (boomBtn) {
      boomBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.boom();
      });
    }

    const resetBtn = document.getElementById('btn-boom-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sounds.playClick();
        this.reset();
      });
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Update & draw links
    this.nodes.forEach(node => {
      if (node.parent) {
        this.ctx.beginPath();
        this.ctx.moveTo(node.parent.x, node.parent.y);
        this.ctx.lineTo(node.x, node.y);
        this.ctx.strokeStyle = node.tier === 2 ? 'rgba(215, 255, 58, 0.45)' : 'rgba(46, 230, 255, 0.35)';
        this.ctx.lineWidth = node.tier === 2 ? 1.8 : 1;
        this.ctx.stroke();
      }
    });

    // Update node physics (smooth lerp to target)
    this.nodes.forEach(node => {
      node.x += (node.targetX - node.x) * 0.12;
      node.y += (node.targetY - node.y) * 0.12;
      node.pulse += 0.04;

      // Glow circle for root or selected
      const isSelected = this.selectedNode === node;
      if (isSelected || node.isRoot) {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(node.x, node.y, node.radius + 8 + Math.sin(node.pulse) * 3, 0, Math.PI * 2);
        this.ctx.fillStyle = node.color === '#D7FF3A' ? 'rgba(215, 255, 58, 0.22)' : 'rgba(46, 230, 255, 0.18)';
        this.ctx.fill();
        this.ctx.restore();
      }

      // Draw Node Base
      this.ctx.save();
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = isSelected ? '#000' : '#17171F';
      this.ctx.fill();
      this.ctx.lineWidth = isSelected ? 3 : 2;
      this.ctx.strokeStyle = node.color;
      this.ctx.stroke();

      // Node label inside/around
      this.ctx.fillStyle = '#F2EDE3';
      this.ctx.font = `${node.tier === 1 ? '13px' : '11px'} 'Chakra Petch', sans-serif`;
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      if (node.isRoot) {
        this.ctx.fillText('☕ COFFEE', node.x, node.y);
      } else {
        this.ctx.fillText(node.label.length > 12 ? node.label.substring(0, 10) + '..' : node.label, node.x, node.y + node.radius + 14);
      }
      this.ctx.restore();
    });

    // Update & draw particles / shockwaves
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      if (p.type === 'shockwave') {
        p.radius += p.speed;
        p.alpha -= 0.025;
        if (p.alpha <= 0) {
          this.particles.splice(i, 1);
          continue;
        }
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        this.ctx.strokeStyle = p.color;
        this.ctx.globalAlpha = p.alpha;
        this.ctx.lineWidth = 2.5;
        this.ctx.stroke();
        this.ctx.globalAlpha = 1;
      } else if (p.type === 'dot') {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.03;
        if (p.alpha <= 0) {
          this.particles.splice(i, 1);
          continue;
        }
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        this.ctx.fillStyle = p.color;
        this.ctx.globalAlpha = p.alpha;
        this.ctx.fill();
        this.ctx.globalAlpha = 1;
      }
    }

    this.animId = requestAnimationFrame(() => this.animate());
  }
}

// --- FULL FORCE-DIRECTED KNOWLEDGE GRAPH ENGINE ---
class KnowledgeGraphExplorer {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.nodes = [];
    this.links = [];
    this.activeCategory = 'all';
    this.activeEra = 'all';
    this.searchQuery = '';
    this.selectedNode = null;
    this.hoverNode = null;
    this.dragNode = null;
    this.isDragging = false;
    this.pan = { x: 0, y: 0 };
    this.zoom = 1;

    this.seedData();
    this.init();
  }

  seedData() {
    // 6-Category Palette & Shapes as per brief
    // Science (Cyan, circle), History (Ember, hexagon), Tech (Violet, square),
    // Culture (Amber, triangle), Nature (Bio Green, diamond), Art (Coral, ring)
    this.rawNodes = [
      { id: 'GRM-001', title_th: 'ระบบสุริยะศูนย์กลาง (Heliocentrism)', category: 'science', era: 'Renaissance', year: 1543, shape: 'circle', color: '#2EE6FF', summary: 'โคเปอร์นิคัสเสนอว่าดวงอาทิตย์เป็นศูนย์กลาง เปลี่ยนวิธีคิดของมนุษยชาติเกี่ยวกับจักรวาล', takeaway: 'ท้าทายสมมติฐานเดิมที่ทุกคนเชื่อว่าจริง เพื่อค้นพบโอกาสใหม่', sources: 'De revolutionibus orbium coelestium' },
      { id: 'GRM-002', title_th: 'กล้องโทรทรรศน์กาลิเลโอ', category: 'tech', era: 'Renaissance', year: 1609, shape: 'square', color: '#8C6BFF', summary: 'กาลิเลโอสร้างกล้องส่องพบดวงจันทร์ของดาวพฤหัสบดี เป็นหลักฐานเชิงประจักษ์ชิ้นแรก', takeaway: 'เครื่องมือวัดที่แม่นยำเปลี่ยนข้อถกเถียงให้กลายเป็นข้อเท็จจริง', sources: 'Sidereus Nuncius' },
      { id: 'GRM-003', title_th: 'การนำทางด้วยดาวและการเดินเรือ', category: 'history', era: 'Age of Discovery', year: 1492, shape: 'hexagon', color: '#FF5A1F', summary: 'การบันทึกตำแหน่งดวงดาวเชื่อมการค้าโลกและสร้างแผนที่แรกของดาวเคราะห์', takeaway: 'การกำหนดจุดอ้างอิงที่มั่นคงช่วยให้เดินทางในความไม่แน่นอนได้ปลอดภัย', sources: 'Maritime Silk & Atlantic Logs' },
      { id: 'GRM-004', title_th: 'การหมักดอง & จุลินทรีย์โบราณ', category: 'culture', era: 'Ancient', year: -3000, shape: 'triangle', color: '#FFC233', summary: 'ภูมิปัญญาการถนอมอาหารและยาสมุนไพรที่เชื่อมโยงกับไมโครไบโอมในลำไส้', takeaway: 'กินอาหารหมักธรรมชาติวันละ 1 ส่วนเพื่อเสริมภูมิคุ้มกันระดับเซลล์', sources: 'Ancient Egyptian & Asian Records' },
      { id: 'GRM-005', title_th: 'เพนนิซิลลิน & เชื้อราฟลีมมิง', category: 'nature', era: 'Industrial', year: 1928, shape: 'diamond', color: '#34E89E', summary: 'การปนเปื้อนในจานเพาะเชื้อนำไปสู่ยาปฏิชีวนะตัวแรกที่ช่วยชีวิตคนนับร้อยล้าน', takeaway: 'ความผิดพลาดที่ไม่คาดคิดอาจเป็นจุดเริ่มต้นของสิ่งประดิษฐ์ยิ่งใหญ่', sources: 'British Journal of Exp. Pathology' },
      { id: 'GRM-006', title_th: 'สัดส่วนทองคำ & เรขาคณิตศักดิ์สิทธิ์', category: 'art', era: 'Ancient', year: -500, shape: 'ring', color: '#FF5FA2', summary: 'อัตราส่วน 1.618 ในเปลือกหอย นอติลุส สู่สถาปัตยกรรมพาร์เธนอนและดีไซน์โมเดิร์น', takeaway: 'การจัดองค์ประกอบภาพและ UI ด้วย Golden Ratio เพิ่มความสบายตาใน 3 วินาที', sources: 'Euclid’s Elements / Fibonacci' },
      { id: 'GRM-007', title_th: 'ทรานซิสเตอร์ & เซมิคอนดักเตอร์', category: 'tech', era: 'Modern', year: 1947, shape: 'square', color: '#8C6BFF', summary: 'สวิตช์อิเล็กทรอนิกส์ขนาดจิ๋วที่เปิดประตูสู่คอมพิวเตอร์และโลก AI ยุคปัจจุบัน', takeaway: 'การลดขนาดและเพิ่มความหนาแน่นคือกลยุทธ์สร้างมูลค่าระยะยาว', sources: 'Bell Labs Archives' },
      { id: 'GRM-008', title_th: 'โครงสร้าง DNA เกลียวคู่', category: 'science', era: 'Modern', year: 1953, shape: 'circle', color: '#2EE6FF', summary: 'วัตสัน คริก และแฟรงคลิน ถอดรหัสภาษาของชีวิตที่เขียนด้วยเบส 4 ตัว', takeaway: 'ความซับซ้อนของสิ่งมีชีวิตเกิดจากกฎเกณฑ์พื้นฐานที่เรียบง่ายเพียงไม่กี่ข้อ', sources: 'Nature 171, 737–738' },
      { id: 'GRM-009', title_th: 'แท่นพิมพ์กูเทนแบร์ก', category: 'history', era: 'Renaissance', year: 1440, shape: 'hexagon', color: '#FF5A1F', summary: 'การพิมพ์โลหะหลอมกระจายความรู้สู่มหาชน จุดชนวนการปฏิวัติวิทยาศาสตร์', takeaway: 'เมื่อต้นทุนการกระจายข้อมูลลดลง ความรู้จะกลายเป็นอำนาจของทุกคน', sources: 'Mainz Archive Records' },
      { id: 'GRM-010', title_th: 'ไบโอมิมิครี (Biomimicry)', category: 'nature', era: 'Modern', year: 1997, shape: 'diamond', color: '#34E89E', summary: 'ออกแบบนวัตกรรมมนุษย์โดยเลียนแบบกลไกธรรมชาติ 3.8 พันล้านปี (เช่น หัวรถไฟชินคันเซ็นจากปากนกกระเต็น)', takeaway: 'ก่อนออกแบบปัญหาใหม่ ลองถามว่าธรรมชาติแก้ปัญหานี้ไว้อย่างไร', sources: 'Janine Benyus Research' },
      { id: 'GRM-011', title_th: 'เบาเฮาส์ (Bauhaus) & ฟังก์ชันนิยม', category: 'art', era: 'Industrial', year: 1919, shape: 'ring', color: '#FF5FA2', summary: 'โรงเรียนศิลปะที่รวมงานฝีมือ เทคโนโลยี และประโยชน์ใช้สอยเข้าเป็นหนึ่งเดียว', takeaway: 'Form Follows Function — ความงามที่แท้จริงเกิดจากความเรียบง่ายที่มีประโยชน์', sources: 'Weimar Bauhaus Manifesto' },
      { id: 'GRM-012', title_th: 'การเกษตรน้ำขึ้นน้ำลง & ชลประทานโบราณ', category: 'culture', era: 'Ancient', year: -2000, shape: 'triangle', color: '#FFC233', summary: 'การจัดการน้ำลุ่มน้ำเจ้าพระยาและเมโสโปเตเมียที่สอดคล้องกับฤดูกาล', takeaway: 'การทำงานร่วมกับระบบธรรมชาติ ดีกว่าการพยายามเอาชนะ', sources: 'Mesopotamian Canals & Thai Agronomy' }
    ];

    this.rawLinks = [
      { source: 'GRM-001', target: 'GRM-002', relation: 'influenced' },
      { source: 'GRM-002', target: 'GRM-003', relation: 'derived_from' },
      { source: 'GRM-009', target: 'GRM-001', relation: 'enabled' },
      { source: 'GRM-004', target: 'GRM-005', relation: 'connected_with' },
      { source: 'GRM-005', target: 'GRM-008', relation: 'derived_from' },
      { source: 'GRM-006', target: 'GRM-011', relation: 'influenced' },
      { source: 'GRM-007', target: 'GRM-002', relation: 'evolved_from' },
      { source: 'GRM-010', target: 'GRM-011', relation: 'inspired_by' },
      { source: 'GRM-010', target: 'GRM-005', relation: 'shares_principle' },
      { source: 'GRM-012', target: 'GRM-010', relation: 'aligned_with' },
      { source: 'GRM-009', target: 'GRM-007', relation: 'knowledge_transfer' }
    ];
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.setupNodes();
    this.setupEventListeners();
    this.selectedNode = this.nodes[0];
    this.updateHUDCard();
    this.animate();
  }

  resize() {
    if (!this.canvas) return;
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
    this.canvas.width = this.width * window.devicePixelRatio;
    this.canvas.height = this.height * window.devicePixelRatio;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  setupNodes() {
    const cx = this.width / 2;
    const cy = this.height / 2;

    this.nodes = this.rawNodes.map((n, i) => {
      const angle = (i / this.rawNodes.length) * Math.PI * 2;
      const radius = 120 + Math.random() * 80;
      return {
        ...n,
        x: cx + Math.cos(angle) * radius,
        y: cy + Math.sin(angle) * radius,
        vx: 0,
        vy: 0,
        radius: 18,
        active: true
      };
    });

    this.links = this.rawLinks.map(l => ({
      ...l,
      sourceNode: this.nodes.find(n => n.id === l.source),
      targetNode: this.nodes.find(n => n.id === l.target)
    })).filter(l => l.sourceNode && l.targetNode);
  }

  setupEventListeners() {
    // Filter Buttons
    const catPills = document.querySelectorAll('.cat-pill');
    catPills.forEach(pill => {
      pill.addEventListener('click', (e) => {
        catPills.forEach(p => p.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.activeCategory = e.currentTarget.dataset.cat;
        this.filterGraph();
        sounds.playClick();
      });
    });

    // Era Slider
    const eraSlider = document.getElementById('era-range-slider');
    const eraLabel = document.getElementById('era-slider-label');
    if (eraSlider) {
      const eras = ['All Eras', 'Ancient', 'Renaissance', 'Industrial', 'Modern'];
      eraSlider.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        eraLabel.textContent = eras[val];
        this.activeEra = val === 0 ? 'all' : eras[val];
        this.filterGraph();
      });
    }

    // Search input
    const searchInput = document.getElementById('graph-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.filterGraph();
      });
    }

    // Mouse Interactions (Hover, Drag)
    this.canvas.addEventListener('mousedown', (e) => this.onMouseDown(e));
    window.addEventListener('mousemove', (e) => this.onMouseMove(e));
    window.addEventListener('mouseup', () => this.onMouseUp());
  }

  filterGraph() {
    this.nodes.forEach(n => {
      const matchesCat = this.activeCategory === 'all' || n.category === this.activeCategory;
      const matchesEra = this.activeEra === 'all' || n.era.includes(this.activeEra);
      const matchesSearch = !this.searchQuery || 
        n.title_th.toLowerCase().includes(this.searchQuery) || 
        n.id.toLowerCase().includes(this.searchQuery);
      n.active = matchesCat && matchesEra && matchesSearch;
    });
  }

  onMouseDown(e) {
    const rect = this.canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    for (let i = this.nodes.length - 1; i >= 0; i--) {
      const n = this.nodes[i];
      if (!n.active) continue;
      const d = Math.hypot(n.x - mx, n.y - my);
      if (d <= n.radius + 8) {
        this.dragNode = n;
        this.selectedNode = n;
        this.isDragging = true;
        sounds.playPing();
        this.updateHUDCard();
        return;
      }
    }
  }

  onMouseMove(e) {
    const rect = this.canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    if (this.isDragging && this.dragNode) {
      this.dragNode.x = mx;
      this.dragNode.y = my;
      this.dragNode.vx = 0;
      this.dragNode.vy = 0;
    } else {
      let found = null;
      for (const n of this.nodes) {
        if (!n.active) continue;
        if (Math.hypot(n.x - mx, n.y - my) <= n.radius + 6) {
          found = n;
          break;
        }
      }
      this.hoverNode = found;
      this.canvas.style.cursor = found ? 'pointer' : 'grab';
    }
  }

  onMouseUp() {
    this.isDragging = false;
    this.dragNode = null;
  }

  updateHUDCard() {
    const card = document.getElementById('specimen-hud-display');
    if (!card || !this.selectedNode) return;
    const n = this.selectedNode;

    card.innerHTML = `
      <div class="specimen-label" style="border-left-color: ${n.color}; width: 100%; margin-bottom: 0.75rem;">
        <span class="specimen-code">${n.id}</span>
        <span class="specimen-tag">${n.era} • ${n.year > 0 ? n.year : Math.abs(n.year) + ' BC'}</span>
      </div>
      <h4 style="font-family: var(--font-heading); font-size: 1.15rem; color: #fff; margin-bottom: 0.5rem;">
        ${n.title_th}
      </h4>
      <p style="font-size: 0.85rem; color: var(--gr-fog); line-height: 1.5; margin-bottom: 0.75rem;">
        ${n.summary}
      </p>
      <div style="background: rgba(215, 255, 58, 0.08); border-left: 3px solid var(--gr-lime); padding: 8px 12px; margin-bottom: 0.75rem; border-radius: 2px;">
        <div style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--gr-lime); font-weight: 700;">
          ✦ EVERYDAY TAKEAWAY:
        </div>
        <div style="font-size: 0.82rem; color: var(--gr-paper); font-weight: 500; margin-top: 2px;">
          ${n.takeaway}
        </div>
      </div>
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--gr-fog);">
        <span>PROVENANCE:</span> <span style="color: var(--gr-cyan)">${n.sources}</span>
      </div>
    `;
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Simple Force-Directed Physics
    const cx = this.width / 2;
    const cy = this.height / 2;

    this.nodes.forEach(n1 => {
      if (!n1.active || n1 === this.dragNode) return;

      // Center gravity
      n1.vx += (cx - n1.x) * 0.0006;
      n1.vy += (cy - n1.y) * 0.0006;

      // Node repulsion
      this.nodes.forEach(n2 => {
        if (n1 === n2 || !n2.active) return;
        const dx = n1.x - n2.x;
        const dy = n1.y - n2.y;
        const dist = Math.hypot(dx, dy) || 1;
        if (dist < 140) {
          const force = (140 - dist) / 140;
          n1.vx += (dx / dist) * force * 0.4;
          n1.vy += (dy / dist) * force * 0.4;
        }
      });

      // Link attraction
      this.links.forEach(l => {
        if (!l.sourceNode.active || !l.targetNode.active) return;
        let other = null;
        if (l.sourceNode === n1) other = l.targetNode;
        if (l.targetNode === n1) other = l.sourceNode;
        if (other) {
          const dx = other.x - n1.x;
          const dy = other.y - n1.y;
          const dist = Math.hypot(dx, dy) || 1;
          const targetDist = 110;
          const force = (dist - targetDist) * 0.003;
          n1.vx += (dx / dist) * force;
          n1.vy += (dy / dist) * force;
        }
      });

      // Apply velocity and damping
      n1.x += n1.vx;
      n1.y += n1.vy;
      n1.vx *= 0.88;
      n1.vy *= 0.88;

      // Boundary clamp
      n1.x = Math.max(30, Math.min(this.width - 30, n1.x));
      n1.y = Math.max(30, Math.min(this.height - 30, n1.y));
    });

    // Draw Links
    this.links.forEach(l => {
      if (!l.sourceNode.active || !l.targetNode.active) return;
      const isHighlighted = (this.selectedNode === l.sourceNode || this.selectedNode === l.targetNode);

      this.ctx.beginPath();
      this.ctx.moveTo(l.sourceNode.x, l.sourceNode.y);
      this.ctx.lineTo(l.targetNode.x, l.targetNode.y);

      if (isHighlighted) {
        this.ctx.strokeStyle = '#D7FF3A';
        this.ctx.lineWidth = 2.2;
      } else {
        this.ctx.strokeStyle = 'rgba(44, 44, 58, 0.7)';
        this.ctx.lineWidth = 1;
      }
      this.ctx.stroke();
    });

    // Draw Nodes with geometric shapes
    this.nodes.forEach(n => {
      if (!n.active) return;
      const isSel = this.selectedNode === n;
      const isHov = this.hoverNode === n;

      this.ctx.save();
      this.ctx.translate(n.x, n.y);

      if (isSel) {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, n.radius + 10, 0, Math.PI * 2);
        this.ctx.fillStyle = 'rgba(215, 255, 58, 0.25)';
        this.ctx.fill();
      }

      this.ctx.fillStyle = isSel ? '#000' : '#17171F';
      this.ctx.strokeStyle = isSel ? '#D7FF3A' : n.color;
      this.ctx.lineWidth = isSel ? 3 : 2;

      // Draw by shape code: circle, hexagon, square, triangle, diamond, ring
      if (n.shape === 'circle') {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, n.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();
      } else if (n.shape === 'square') {
        this.ctx.beginPath();
        this.ctx.rect(-n.radius, -n.radius, n.radius * 2, n.radius * 2);
        this.ctx.fill();
        this.ctx.stroke();
      } else if (n.shape === 'diamond') {
        this.ctx.beginPath();
        this.ctx.moveTo(0, -n.radius * 1.2);
        this.ctx.lineTo(n.radius * 1.2, 0);
        this.ctx.lineTo(0, n.radius * 1.2);
        this.ctx.lineTo(-n.radius * 1.2, 0);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();
      } else if (n.shape === 'triangle') {
        this.ctx.beginPath();
        this.ctx.moveTo(0, -n.radius * 1.2);
        this.ctx.lineTo(n.radius * 1.1, n.radius);
        this.ctx.lineTo(-n.radius * 1.1, n.radius);
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();
      } else if (n.shape === 'hexagon') {
        this.ctx.beginPath();
        for (let a = 0; a < 6; a++) {
          const rad = (a * Math.PI) / 3;
          const hx = Math.cos(rad) * n.radius * 1.1;
          const hy = Math.sin(rad) * n.radius * 1.1;
          if (a === 0) this.ctx.moveTo(hx, hy);
          else this.ctx.lineTo(hx, hy);
        }
        this.ctx.closePath();
        this.ctx.fill();
        this.ctx.stroke();
      } else if (n.shape === 'ring') {
        this.ctx.beginPath();
        this.ctx.arc(0, 0, n.radius, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(0, 0, n.radius * 0.45, 0, Math.PI * 2);
        this.ctx.stroke();
      }

      // Title text underneath
      this.ctx.fillStyle = '#F2EDE3';
      this.ctx.font = '11px "Chakra Petch", sans-serif';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(n.title_th.length > 10 ? n.title_th.substring(0, 9) + '..' : n.title_th, 0, n.radius + 15);

      this.ctx.restore();
    });

    requestAnimationFrame(() => this.animate());
  }
}

// --- BOOTSTRAP ON LOAD ---
window.addEventListener('DOMContentLoaded', () => {
  window.presentation = new PresentationController();
  window.boomingEngine = new DataBoomingEngine('booming-canvas');
  window.graphEngine = new KnowledgeGraphExplorer('graph-canvas');
});

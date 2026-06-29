import { Github, Linkedin, Mail } from "lucide-react";
import descendingAorta from "../images/descending_aorta.gif";
import frameHandling from "../images/frame_handling_redact.png";
import metaatomLibrary from "../images/metaatom_library.png";
import rot from "../images/rot.gif";
import simulationReal from "../images/simulation_real.png";
import sliceExample from "../images/slice_example.png";
import trentoExample from "../images/Trento_example.png";
import voidAlgorithm from "../images/void_algorithm.gif";

const links = [
  { label: "Contact", href: "mailto:shawnwwimer@gmail.com", Icon: Mail },
  { label: "GitHub", href: "https://github.com/shawnwwimer", Icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shawn-wimer-881069135/",
    Icon: Linkedin,
  },
];

const proofItems = [
  {
    title: "End-to-end ownership",
    text: "Architecture and design through data collection and analysis.",
  },
  {
    title: "Resource constrained systems",
    text: "Real-time OS and baremetal on microproccessor and FPGA platforms.",
  },
  {
    title: "Physics-grounded design",
    text: "Optical modeling, material considerations, and proven approaches.",
  },
  {
    title: "Prototype-driven R&D",
    text: "Building quickly with the experience to understand every stage.",
  },
];

const projects = [
  {
    kicker: "Embedded biosensing",
    title: "Low-power, multi-sensor physiological monitoring",
    intro:
      "A wireless experimental sensing platform built for minimally invasive preclinical data collection under tight power, timing, and integration constraints.",
    image: descendingAorta,
    imageAlt:
      "Animated physiological signal analysis from a connected sensing platform",
    captionTitle: "What this image is showing",
    caption:
      "A sanitized example of the host-side analysis workflow built around the sensing platform. Time-delay embeddings of quasiperiodic waveforms result in strange attractors, which can be projected onto surfaces and then analyzed with conventional computer vision pipelines to extract subject state. In this case, we see the transformation of the attractor built from arterial pressure as we move through the descending aorta.",
    details: [
      {
        label: "Engineering challenge",
        text: "Keeping acquisition synchronized and reliable between five independent sensors while managing power and radio activity.",
      },
      {
        label: "What I owned",
        text: "Zephyr firmware, custom drivers, sensor and wireless communication timing, bring-up, antenna optimization, troubleshooting, and analysis tooling.",
      },
      {
        label: "Outcomes",
        text: "Novel vital signs that correlate with multiple facets of subject state and a framing strategy that unlocks the extensive body of computer vision, image processing, and ML analysis tools.",
      },
    ],
    tags: [
      "Zephyr RTOS",
      "Mixed-sensor acquisition",
      "Wireless communications",
      "Biocompatibility",
      "ML image analysis",
    ],
  },
  {
    kicker: "FPGA + real-time video",
    title: "Deterministic imaging pipelines on AMD/Xilinx platforms",
    intro:
      "Real-time video-processing work on Zynq UltraScale+ hardware for custom carrier boards, including development of HLS kernels, generation of overlays, image movement, and hardware/software bring-up.",
    image: frameHandling,
    imageAlt: "Frame buffering and handling scheme",
    captionTitle: "Real-time viewing and continuous processing",
    caption:
      "This application required multiple frames, captured sequentially, for the processing routine, but dropping frame rate was impermissible. Using a system of frame buffers and using the processing results to modify the viewed frame where needed, raw frame rate and processing rates are kept high with no latency for viewing the scene.",
    reverse: true,
    details: [
      {
        label: "Engineering challenge",
        text: "Performing multi-frame data processing for generating overlays, building a responsive user interface, and enforcing reliable frame rates, all under heavy time constraints.",
      },
      {
        label: "What I owned",
        text: "HLS kernels, multi-frame data processing, memory optimization, platform bring-up, and host/processor interaction.",
      },
      {
        label: "Outcomes",
        text: "Thermal image processing cores and pipelines, simultaneous high speed image collection and viewing, system and memory architecture for image processing, and LVGL integrated with Zynq UltraScale+ hardware for embedded heads-up display.",
      },
    ],
    tags: [
      "Zynq UltraScale+",
      "Vitis HLS",
      "Vivado",
      "Optimization",
      "Embedded GUI",
    ],
  },
  {
    kicker: "Embedded spectral imaging",
    title: "Multispectral imaging and analysis",
    intro:
      "Embedded multispectral and hyperspectral imaging work spanning acquisition, FPGA/SoC data movement, calibration, material differentiation, and higher-level interpretation.",
    image: trentoExample,
    imageAlt:
      "Multispectral imaging example used to demonstrate material differentiation",
    captionTitle: "Multispectral image processing",
    caption:
      "Multispectral images reveal features otherwise hidden in too-coarse bins. This is an example of my low-compute material differentiation approach for infrared spectrum hyperspectral images, using no training, classification, or segmentation. The differentiation is less obvious in this visible image, but there are no free-to-use thermal infrared multi/hyperspectral scene sets.",
    details: [
      {
        label: "Engineering challenge",
        text: "Preserving meaningful spectral information within hardware, bandwidth, calibration, and compute limits.",
      },
      {
        label: "What I owned",
        text: "Compute system architecture, embedded/FPGA integration, capture workflows, processing concepts, and compute-limited analysis techniques.",
      },
      {
        label: "Outcomes",
        text: "Thermal/multispectral acquisition, light-weight material differentiation without training, image-quality analysis, and public-dataset demonstrations.",
      },
    ],
    tags: [
      "Multispectral thermal imaging",
      "Infrared optics",
      "Zynq UltraScale+",
      "Vision HLS",
      "Embedded vision",
    ],
  },
  {
    kicker: "Computational optics",
    title: "Physical modeling from nanostructure to complete optical system",
    intro:
      "Modeling work that connects electromagnetic behavior at the component scale with diffraction and system-level performance.",
    image: metaatomLibrary,
    imageAlt: "Subset of a metaatom library",
    captionTitle: "Subset of a metaatom library",
    caption:
      "For a VIS-NIR spectral application, I needed a set of metaatoms that spanned the spectrum and performed adequately. Each point in the left chart shows a metaatom with an associated spectral color and FOM. The right chart shows those same metaatoms and was used to predict other performant metaatoms, ordered by spectral color and colored by FOM. This is a subset of a larger library, with parameters chosen so that the entire surface is fabricated as easily as possible.",
    reverse: true,
    details: [
      {
        label: "Engineering challenge",
        text: "Bridging full-wave simulations and complete-system behavior without losing the physics that drives performance or assuming unrealistic engineering.",
      },
      {
        label: "What I owned",
        text: "Model construction, parameter sweeps, physical interpretation, analytical derivations, and design trade studies.",
      },
      {
        label: "Outcomes",
        text: "Metaatom libraries, metaatom patch effective size extension discoveries, metamaterial fabrication strategies, and doublet beam-steering architectures.",
      },
    ],
    tags: [
      "FEM simulation",
      "Metaoptics",
      "Analytical derivations",
      "Spectroscopic techniques",
      "Polarization optics",
    ],
  },
];

const capabilities = [
  {
    title: "Embedded systems",
    // intro: "Low-power connected sensing platforms and custom peripheral integration.",
    items: [
      "System-level block design and schematic reviews",
      "RTOS or baremetal with embedded GUI",
      "Sensor drivers and acquisition/communication timing",
      "Power, interference, and bring-up debugging",
    ],
  },
  {
    title: "FPGA + edge imaging",
    // intro: "Real-time processing pipelines and heterogeneous compute systems.",
    items: [
      "AMD/Xilinx Zynq and Kintex",
      "Vitis HLS",
      "Video, overlays, DDR, PCIe",
      "NVIDIA Jetson integration",
    ],
  },
  {
    title: "Optics + instrumentation",
    // intro: "Physics-driven optical design, characterization, and calibration.",
    items: [
      "Metaatom concept and simulation",
      "Diffractive optic design",
      "Electromagnetic wave with material interactions across the spectrum",
      "Multispectral snapshot imaging",
      "Camera and adaptive-optics integration",
      "Polarization, spectroscopy, and Mueller methods",
    ],
  },
  {
    title: "Scientific computation",
    // intro: "Models and analysis tools built to answer experimental questions.",
    items: [
      "Development of simulation software for diverse fields",
      "Signal and image processing",
      "ML for mechanical sensor, audio, and image data",
      "Creation of algorithms for novel analyses",
      "Monte Carlo and deposition modeling",
    ],
  },
];

const galleryFigures = [
  {
    image: sliceExample,
    alt: "X-ray scan results of PCB",
    title: "Comprehensive fault analysis of a flex PCB",
    text: "The first iteration of our minimally invasive device had significant yield issues. After assembling X-ray slices a local geography lab took into a volumetric scan, I found that the flex PCB manufacturer did not keep to the tolerances they claimed. Many of the solder joints had failed and many of the traces had inconsistent widths. Most shockingly, their laser cutting tool trimmed too much off of the board edge, allowing the signal and ground planes to form intermittent bridges while flexing.",
  },
  {
    image: rot,
    alt: "Doublet beam steering by displacement and rotation",
    title: "Beam steering by rotation",
    text: "During work on achromatic doublet beam steering, I found an additional phase term that extends the earlier technique to allow more degrees of freedom. The spot position is determined by relative lateral displacement and rotation.",
  },
  {
    image: simulationReal,
    alt: "Two simulated films against a real film",
    title: "Accurate material deposition simulation",
    text: "The figures with color show two nanoheterostructured thin films simulated in continuous space with identical parameters except that the left has a parallel material flux and the right has a divergent material flux. The grayscale image is a real SEM of such a film. To deposit films in continuous space required extensive optimization to simulate free-space and diffusing particle behavior.",
  },
  {
    image: voidAlgorithm,
    alt: "Surface reconstruction algorithm for mostly empty surfaces",
    title: "Surface reconstruction algorithm for mostly empty surfaces",
    text: (
      <>
        A key part of my PhD work was to demonstrate how well my simulation
        methods approximated reality. While discrete simulations were easy to
        perform and check, complications arising from the large amount of empty
        space within my nanostructures made conventional surface reconstructions
        for volume estimation useless. Instead, I adapted the ball-pivoting
        algorithm from Bernardini <em> et al.</em> (1999) into a more bespoke
        algorithm that yielded great results.
      </>
    ),
    className: "surface-reconstruction",
  },
];

function App() {
  return (
    <div className="app-shell">
      <header className="site-header" aria-label="Portfolio header">
        <a className="brand-mark" href="#top" aria-label="Shawn Wimer home">
          SW
        </a>
        <nav className="top-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#range">Range</a>
          <a href="#figures">Figures</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-title">
            <p className="eyebrow">Shawn Wimer</p>
            <h1>Solutions from concept to end product.</h1>
          </div>
          <div className="hero-copy">
            <p className="lead">
              <strong>
                Embedded Systems & Hardware | Data Processing & Analysis | Instrumentation
                | Simulation & Visualization
              </strong>
            </p>
            {/* <p>
              I work across embedded firmware, sensing, real-time imaging and
              processing, research, and scientific software.
            </p>
            <p>
              My best work happens where the full signal chain matters: sensor
              timing, hardware bring-up, data movement, calibration, analysis,
              and validation.
            </p> */}
            <div className="hero-links">
              {links.map(({ label, href, Icon }) => (
                <a key={label} href={href}>
                  <Icon aria-hidden="true" size={18} />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section aria-label="Core strengths" className="proof-strip">
          {proofItems.map((item) => (
            <article className="proof-item" key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </article>
          ))}
        </section>

        <section className="section-head" id="work">
          {/* <div> */}
            <p className="section-kicker">Selected work</p>
            <h2>Elegant project design through the full signal chain.</h2>
          {/* </div> */}
          {/* <p>
            Public, architecture-level summaries that show what Shawn owned and
            how he thinks without exposing proprietary implementation details.
          </p> */}
        </section>

        {projects.map((project) => (
          <ProjectPanel project={project} key={project.title} />
        ))}

        <section className="section-head" id="range">
          <div>
            <p className="section-kicker">Technical range</p>
            <h2>Cross-layer technical fluency.</h2>
          </div>
          <p>
            I am most useful when a project crosses boundaries: electrical
            hardware and firmware, research and implementation, optics and
            computation, or experimental data and the models needed to interpret
            it.
          </p>
        </section>

        <section className="capability-grid">
          {capabilities.map((capability) => (
            <article className="capability-card" key={capability.title}>
              <h3>{capability.title}</h3>
              {/* <p>{capability.intro}</p> */}
              <ul>
                {capability.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section
          className="figure-grid"
          id="figures"
          aria-label="Additional project figures"
        >
          {galleryFigures.map((figure) => (
            <figure
              className={`gallery-figure ${figure.className ?? ""}`}
              key={figure.title}
            >
              <div className="gallery-media">
                <img src={figure.image} alt={figure.alt} />
              </div>
              <figcaption>
                <strong>{figure.title}</strong>
                {figure.text}
              </figcaption>
            </figure>
          ))}
        </section>
      </main>

      <footer className="footer">
        <span>Shawn Wimer | Electrical engineer and systems builder</span>
        <div className="footer-links">
          {links.map(({ label, href }) => (
            <a key={label} href={href}>
              {label === "Contact" ? "Email" : label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

function ProjectPanel({ project }) {
  return (
    <section className={`project-panel ${project.reverse ? "reverse" : ""}`}>
      <figure className="project-media">
        <img alt={project.imageAlt} src={project.image} />
        <figcaption>
          <strong>{project.captionTitle}</strong>
          {project.caption}
        </figcaption>
      </figure>
      <div className="project-copy">
        <p className="project-kicker">{project.kicker}</p>
        <h3>{project.title}</h3>
        <p>{project.intro}</p>
        <ul className="project-details">
          {project.details.map((detail) => (
            <li key={detail.label}>
              <strong>{detail.label}</strong>
              {detail.text}
            </li>
          ))}
        </ul>
        <div className="tag-row" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;

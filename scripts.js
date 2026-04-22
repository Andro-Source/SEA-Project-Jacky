// This array stores the course data for the catalog.
// Each object represents one UCSD CSE course.
const courses = [
  {
    code: "CSE 8A",
    courseNumber: 8,
    title: "Introduction to Programming and Computational Problem Solving I",
    units: 4,
    description:
      "Introduces basic programming concepts, problem solving, and software development using a high-level language.",
  },
  {
    code: "CSE 8B",
    courseNumber: 8,
    title: "Introduction to Programming and Computational Problem Solving II",
    units: 4,
    description:
      "Continues programming practice with a focus on larger programs, testing, and more advanced problem-solving techniques.",
  },
  {
    code: "CSE 11",
    courseNumber: 11,
    title: "Accelerated Introduction to Programming",
    units: 4,
    description:
      "Covers fundamental programming ideas at a faster pace for students with prior programming experience.",
  },
  {
    code: "CSE 12",
    courseNumber: 12,
    title: "Basic Data Structures and Object-Oriented Design",
    units: 4,
    description:
      "Introduces data structures, object-oriented design, and program organization for building larger software systems.",
  },
  {
    code: "CSE 15L",
    courseNumber: 15,
    title: "Software Tools and Techniques Laboratory",
    units: 2,
    description:
      "Provides hands-on practice with command-line tools, version control, testing, debugging, and basic software workflows.",
  },
  {
    code: "CSE 20",
    courseNumber: 20,
    title: "Discrete Mathematics",
    units: 4,
    description:
      "Studies logic, proof techniques, sets, functions, and combinatorics that support computer science theory.",
  },
  {
    code: "CSE 21",
    courseNumber: 21,
    title: "Mathematics for Algorithms and Systems",
    units: 4,
    description:
      "Covers mathematical tools such as induction, graphs, counting, and probability for analyzing algorithms and systems.",
  },
  {
    code: "CSE 30",
    courseNumber: 30,
    title: "Computer Organization and Systems Programming",
    units: 4,
    description:
      "Introduces machine-level programming, memory, data representation, and core ideas behind computer systems.",
  },
  {
    code: "CSE 100",
    courseNumber: 100,
    title: "Advanced Data Structures",
    units: 4,
    description:
      "Explores efficient data structures and algorithmic techniques for building fast and scalable software.",
  },
  {
    code: "CSE 101",
    courseNumber: 101,
    title: "Design and Analysis of Algorithms",
    units: 4,
    description:
      "Focuses on algorithm design strategies, correctness, and runtime analysis for solving computational problems.",
  },
  {
    code: "CSE 105",
    courseNumber: 105,
    title: "Theory of Computability",
    units: 4,
    description:
      "Examines automata, formal languages, computability, and the limits of what computers can solve.",
  },
  {
    code: "CSE 110",
    courseNumber: 110,
    title: "Software Engineering",
    units: 4,
    description:
      "Introduces team-based software development, design practices, testing, documentation, and project organization.",
  },
  {
    code: "CSE 120",
    courseNumber: 120,
    title: "Principles of Computer Operating Systems",
    units: 4,
    description:
      "Covers processes, threads, synchronization, memory management, and the design of operating systems.",
  },
  {
    code: "CSE 130",
    courseNumber: 130,
    title: "Programming Languages: Principles and Paradigms",
    units: 4,
    description:
      "Introduces core concepts in programming languages, including syntax, semantics, functional programming, and type systems.",
  },
  {
    code: "CSE 140",
    courseNumber: 140,
    title: "Components and Design Techniques for Digital Systems",
    units: 4,
    description:
      "Studies digital logic, combinational and sequential circuits, and design methods for computer hardware.",
  },
  {
    code: "CSE 151A",
    courseNumber: 151,
    title: "Introduction to Machine Learning",
    units: 4,
    description:
      "Introduces supervised learning, model evaluation, and practical machine learning methods for data-driven tasks.",
  },
];

// These variables store references to the HTML elements we need to use.
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const courseList = document.getElementById("course-list");
const resultsCount = document.getElementById("results-count");

// This function handles filtering, sorting, and rendering the courses.
function renderCourses() {
  const searchText = searchInput.value.toLowerCase().trim();
  const sortOrder = sortSelect.value;

  // Filter courses by course code or title.
  const filteredCourses = courses.filter(function (course) {
    const matchesCode = course.code.toLowerCase().includes(searchText);
    const matchesTitle = course.title.toLowerCase().includes(searchText);
    return matchesCode || matchesTitle;
  });

  // Sort courses by course number.
  filteredCourses.sort(function (a, b) {
    if (sortOrder === "desc") {
      return b.courseNumber - a.courseNumber;
    }

    return a.courseNumber - b.courseNumber;
  });

  // Clear the old course cards before adding new ones.
  courseList.innerHTML = "";

  // Show how many courses are currently displayed.
  resultsCount.textContent = "Showing " + filteredCourses.length + " course(s)";

  // If no courses match the search, show a simple message.
  if (filteredCourses.length === 0) {
    const emptyMessage = document.createElement("div");
    emptyMessage.className = "empty-message";
    emptyMessage.textContent = "No courses matched your search.";
    courseList.appendChild(emptyMessage);
    return;
  }

  // Create and add a card for each course.
  filteredCourses.forEach(function (course) {
    const card = document.createElement("article");
    card.className = "course-card";

    const title = document.createElement("h2");
    title.textContent = course.code + ": " + course.title;

    const meta = document.createElement("div");
    meta.className = "course-meta";
    meta.textContent =
      "Course Number: " + course.courseNumber + " | Units: " + course.units;

    const description = document.createElement("p");
    description.textContent = course.description;

    card.appendChild(title);
    card.appendChild(meta);
    card.appendChild(description);
    courseList.appendChild(card);
  });
}

// Re-render the list whenever the user types in the search bar.
searchInput.addEventListener("input", renderCourses);

// Re-render the list whenever the user changes the sort dropdown.
sortSelect.addEventListener("change", renderCourses);

// Render the full course list when the page first loads.
renderCourses();

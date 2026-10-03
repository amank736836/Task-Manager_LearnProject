export const API_BASE_URL = "https://task-manager-b8rc.onrender.com";

const DB_STORAGE_KEY = "pulsetask_interactive_db_v1";

const INITIAL_USERS = [
  {
    _id: "usr_manager_1",
    username: "alex_morgan",
    email: "alex@pulsetask.io",
    role: "manager",
  },
  {
    _id: "usr_user_1",
    username: "maya_patel",
    email: "maya@pulsetask.io",
    role: "user",
  },
  {
    _id: "usr_user_2",
    username: "liam_chen",
    email: "liam@pulsetask.io",
    role: "user",
  },
  {
    _id: "usr_user_3",
    username: "sofia_rossi",
    email: "sofia@pulsetask.io",
    role: "user",
  },
];

const now = Date.now();
const dayMs = 86400000;

const INITIAL_TASKS = [
  {
    _id: "tsk_101",
    title: "Design Glassmorphic Design System & Tokens",
    description:
      "Establish dual-theme CSS variables for Dark Cosmic Glass and Light Tactile Claymorphic surfaces with specular border highlights.",
    status: "completed",
    user: {
      _id: "usr_manager_1",
      username: "alex_morgan",
      email: "alex@pulsetask.io",
      role: "manager",
    },
    createdAt: new Date(now - 6 * dayMs).toISOString(),
    updatedAt: new Date(now - 2 * dayMs).toISOString(),
  },
  {
    _id: "tsk_102",
    title: "Implement Self-Drawing SVG Status & Logo Animations",
    description:
      "Animate stroke-dasharray and stroke-dashoffset paths for task completion checkmarks, brand mark, and radial analytics rings.",
    status: "completed",
    user: {
      _id: "usr_user_1",
      username: "maya_patel",
      email: "maya@pulsetask.io",
      role: "user",
    },
    createdAt: new Date(now - 5 * dayMs).toISOString(),
    updatedAt: new Date(now - 1 * dayMs).toISOString(),
  },
  {
    _id: "tsk_103",
    title: "Build Interactive 3D Perspective Tilt Cards",
    description:
      "Add real-time cursor tracking spotlight glare and subtle 3D rotation microinteractions to Bento grid task cards.",
    status: "in-progress",
    user: {
      _id: "usr_manager_1",
      username: "alex_morgan",
      email: "alex@pulsetask.io",
      role: "manager",
    },
    createdAt: new Date(now - 4 * dayMs).toISOString(),
    updatedAt: new Date(now - 12 * 3600000).toISOString(),
  },
  {
    _id: "tsk_104",
    title: "Orchestrate Drag-and-Drop Kanban Workflow Board",
    description:
      "Enable smooth drag-and-drop transitions across Pending, In-Progress, and Completed swimlanes with instant status syncing.",
    status: "in-progress",
    user: {
      _id: "usr_user_1",
      username: "maya_patel",
      email: "maya@pulsetask.io",
      role: "user",
    },
    createdAt: new Date(now - 3 * dayMs).toISOString(),
    updatedAt: new Date(now - 6 * 3600000).toISOString(),
  },
  {
    _id: "tsk_105",
    title: "Integrate SVG Radial Donut & Momentum Spline Charts",
    description:
      "Render interactive animated SVG analytics charts in the Dashboard with live status ratios and team velocity metrics.",
    status: "in-progress",
    user: {
      _id: "usr_user_2",
      username: "liam_chen",
      email: "liam@pulsetask.io",
      role: "user",
    },
    createdAt: new Date(now - 2.5 * dayMs).toISOString(),
    updatedAt: new Date(now - 4 * 3600000).toISOString(),
  },
  {
    _id: "tsk_106",
    title: "Optimize Ambient Aurora Liquid Background Shaders",
    description:
      "Tune CSS hardware acceleration and pause-motion accessibility controls for the floating ambient gradient blobs.",
    status: "pending",
    user: {
      _id: "usr_manager_1",
      username: "alex_morgan",
      email: "alex@pulsetask.io",
      role: "manager",
    },
    createdAt: new Date(now - 2 * dayMs).toISOString(),
    updatedAt: new Date(now - 2 * dayMs).toISOString(),
  },
  {
    _id: "tsk_107",
    title: "Audit Role-Based Access Control for Manager Analytics",
    description:
      "Verify JWT middleware permissions and global team workload breakdown across all registered workspace members.",
    status: "completed",
    user: {
      _id: "usr_user_3",
      username: "sofia_rossi",
      email: "sofia@pulsetask.io",
      role: "user",
    },
    createdAt: new Date(now - 1.5 * dayMs).toISOString(),
    updatedAt: new Date(now - 1 * dayMs).toISOString(),
  },
  {
    _id: "tsk_108",
    title: "Craft Empty-State Doodle & Skeleton Shimmer Screens",
    description:
      "Add self-drawing SVG illustration for zero-result search states and responsive glassmorphic loading placeholders.",
    status: "pending",
    user: {
      _id: "usr_user_1",
      username: "maya_patel",
      email: "maya@pulsetask.io",
      role: "user",
    },
    createdAt: new Date(now - 1 * dayMs).toISOString(),
    updatedAt: new Date(now - 1 * dayMs).toISOString(),
  },
  {
    _id: "tsk_109",
    title: "Configure Automated End-to-End API & UI Smoke Suite",
    description:
      "Validate pagination, multi-field sorting, keyword filtering, and responsive mobile navigation drawers.",
    status: "pending",
    user: {
      _id: "usr_user_2",
      username: "liam_chen",
      email: "liam@pulsetask.io",
      role: "user",
    },
    createdAt: new Date(now - 12 * 3600000).toISOString(),
    updatedAt: new Date(now - 12 * 3600000).toISOString(),
  },
];

function loadLocalDB() {
  try {
    const raw = localStorage.getItem(DB_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.tasks) && Array.isArray(parsed.users)) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn("Failed to parse local DB, resetting:", e);
  }
  const fresh = {
    users: [...INITIAL_USERS],
    tasks: [...INITIAL_TASKS],
  };
  localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(fresh));
  return fresh;
}

function saveLocalDB(db) {
  try {
    localStorage.setItem(DB_STORAGE_KEY, JSON.stringify(db));
  } catch (e) {
    console.warn("Failed to save local DB:", e);
  }
}

export function resetLocalDemoDB() {
  const fresh = {
    users: [...INITIAL_USERS],
    tasks: [...INITIAL_TASKS],
  };
  saveLocalDB(fresh);
  return fresh;
}

function decodeDemoUser(token, db) {
  if (!token) return db.users[0];
  if (token.startsWith("demo_jwt_")) {
    const userId = token.replace("demo_jwt_", "");
    const found = db.users.find((u) => u._id === userId);
    if (found) return found;
  }
  try {
    const cachedUser = JSON.parse(localStorage.getItem("pulsetask_user") || "null");
    if (cachedUser && cachedUser._id) return cachedUser;
  } catch {
    // ignore
  }
  return db.users[0];
}

export function createDemoSession(role = "manager") {
  const db = loadLocalDB();
  const targetUser =
    role === "manager"
      ? db.users.find((u) => u.role === "manager") || db.users[0]
      : db.users.find((u) => u.role === "user") || db.users[1];
  const token = `demo_jwt_${targetUser._id}`;
  return {
    user: { ...targetUser, token },
    token,
  };
}

function handleLocalApiRequest(path, options = {}) {
  const db = loadLocalDB();
  const method = (options.method || "GET").toUpperCase();
  const authHeader = options.headers?.Authorization || options.headers?.authorization || "";
  const token = authHeader.replace("Bearer ", "").trim();
  const currentUser = decodeDemoUser(token, db);
  const body = options.body ? JSON.parse(options.body) : {};

  // 1. Auth routes
  if (path.startsWith("/api/auth/login") && method === "POST") {
    const email = (body.email || "").trim().toLowerCase();
    let user = db.users.find((u) => u.email.toLowerCase() === email);
    if (!user) {
      const username = email.split("@")[0] || "workspace_user";
      const role = email.includes("manager") || email.includes("admin") ? "manager" : "user";
      user = {
        _id: `usr_${Date.now()}`,
        username,
        email: email || "user@pulsetask.io",
        role,
      };
      db.users.push(user);
      saveLocalDB(db);
    }
    const userToken = `demo_jwt_${user._id}`;
    return {
      ok: true,
      status: 200,
      data: { ...user, token: userToken },
    };
  }

  if (path.startsWith("/api/auth/register") && method === "POST") {
    const username = (body.username || "new_member").trim();
    const email = (body.email || `${username}@pulsetask.io`).trim().toLowerCase();
    const role = body.role || "user";
    let existing = db.users.find((u) => u.email.toLowerCase() === email);
    if (!existing) {
      existing = {
        _id: `usr_${Date.now()}`,
        username,
        email,
        role,
      };
      db.users.push(existing);
      // Seed 2 starter tasks for a newly registered user so their workspace feels alive
      db.tasks.unshift(
        {
          _id: `tsk_${Date.now()}_1`,
          title: `Welcome ${username}! Explore Interactive 3D Task Cards`,
          description:
            "Hover over cards to see the 3D perspective tilt and spotlight effect, or switch to the Kanban board to drag tasks across columns.",
          status: "in-progress",
          user: existing,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
        {
          _id: `tsk_${Date.now()}_2`,
          title: "Complete your first animated milestone",
          description:
            "Click the quick-complete button on this card to trigger the self-drawing SVG checkmark and celebratory confetti burst!",
          status: "pending",
          user: existing,
          createdAt: new Date(Date.now() - 3600000).toISOString(),
          updatedAt: new Date(Date.now() - 3600000).toISOString(),
        }
      );
      saveLocalDB(db);
    }
    const userToken = `demo_jwt_${existing._id}`;
    return {
      ok: true,
      status: 201,
      data: { ...existing, token: userToken },
    };
  }

  if (path.startsWith("/api/auth/me") && method === "GET") {
    return {
      ok: true,
      status: 200,
      data: currentUser,
    };
  }

  // 2. Tasks routes
  if (path.startsWith("/api/tasks")) {
    const [pathname, queryString] = path.split("?");
    const segments = pathname.split("/").filter(Boolean); // ['api', 'tasks', ':id?']
    const taskId = segments[2];

    if (method === "GET" && !taskId) {
      const params = new URLSearchParams(queryString || "");
      const status = params.get("status") || "";
      const sort = params.get("sort") || "createdAt:desc";
      const search = (params.get("search") || "").trim().toLowerCase();
      const page = Math.max(1, parseInt(params.get("page") || "1", 10));
      const limit = Math.max(1, parseInt(params.get("limit") || "10", 10));

      let filtered = db.tasks.filter((t) => {
        if (currentUser.role === "user") {
          const ownerId = typeof t.user === "object" ? t.user?._id : t.user;
          return ownerId === currentUser._id;
        }
        return true;
      });

      // Compute status counts before status filter (for rich UI counters)
      const statusCounts = filtered.reduce(
        (acc, t) => {
          acc.all += 1;
          acc[t.status] = (acc[t.status] || 0) + 1;
          return acc;
        },
        { all: 0, pending: 0, "in-progress": 0, completed: 0 }
      );

      if (status) {
        filtered = filtered.filter((t) => t.status === status);
      }

      if (search) {
        filtered = filtered.filter(
          (t) =>
            (t.title || "").toLowerCase().includes(search) ||
            (t.description || "").toLowerCase().includes(search)
        );
      }

      const [sortField, sortDir] = sort.split(":");
      filtered.sort((a, b) => {
        const dir = sortDir === "asc" ? 1 : -1;
        if (sortField === "title") {
          return (a.title || "").localeCompare(b.title || "") * dir;
        }
        return (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()) * dir;
      });

      const totalDocs = filtered.length;
      const totalPages = Math.max(1, Math.ceil(totalDocs / limit));
      const safePage = Math.min(page, totalPages);
      const start = (safePage - 1) * limit;
      const docs = filtered.slice(start, start + limit);

      return {
        ok: true,
        status: 200,
        data: {
          docs,
          totalDocs,
          limit,
          totalPages,
          page: safePage,
          statusCounts,
        },
      };
    }

    if (method === "POST" && !taskId) {
      const newTask = {
        _id: `tsk_${Date.now()}`,
        title: (body.title || "Untitled Task").trim(),
        description: (body.description || "").trim(),
        status: body.status || "pending",
        user: {
          _id: currentUser._id,
          username: currentUser.username,
          email: currentUser.email,
          role: currentUser.role,
        },
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      db.tasks.unshift(newTask);
      saveLocalDB(db);
      return {
        ok: true,
        status: 201,
        data: newTask,
      };
    }

    if (method === "PUT" && taskId) {
      const idx = db.tasks.findIndex((t) => t._id === taskId);
      if (idx === -1) {
        return { ok: false, status: 404, data: { message: "Task not found" } };
      }
      const existing = db.tasks[idx];
      const updated = {
        ...existing,
        title: body.title !== undefined ? body.title : existing.title,
        description:
          body.description !== undefined ? body.description : existing.description,
        status: body.status !== undefined ? body.status : existing.status,
        updatedAt: new Date().toISOString(),
      };
      db.tasks[idx] = updated;
      saveLocalDB(db);
      return {
        ok: true,
        status: 200,
        data: updated,
      };
    }

    if (method === "DELETE" && taskId) {
      const idx = db.tasks.findIndex((t) => t._id === taskId);
      if (idx === -1) {
        return { ok: false, status: 404, data: { message: "Task not found" } };
      }
      db.tasks.splice(idx, 1);
      saveLocalDB(db);
      return {
        ok: true,
        status: 200,
        data: { message: "Task removed" },
      };
    }
  }

  // 3. Dashboard analytics route
  if (path.startsWith("/api/dashboard") && method === "GET") {
    const isManager = currentUser.role === "manager";
    const visibleTasks = isManager
      ? db.tasks
      : db.tasks.filter((t) => {
          const ownerId = typeof t.user === "object" ? t.user?._id : t.user;
          return ownerId === currentUser._id;
        });

    const totalTasks = visibleTasks.length;
    const tasksByStatus = visibleTasks.reduce(
      (acc, t) => {
        acc[t.status] = (acc[t.status] || 0) + 1;
        return acc;
      },
      { pending: 0, "in-progress": 0, completed: 0 }
    );

    const allUsersStats = {};
    if (isManager) {
      for (const u of db.users) {
        const userTasks = db.tasks.filter((t) => {
          const ownerId = typeof t.user === "object" ? t.user?._id : t.user;
          return ownerId === u._id || t.user?.username === u.username;
        });
        const userTasksByStatus = userTasks.reduce(
          (acc, t) => {
            acc[t.status] = (acc[t.status] || 0) + 1;
            return acc;
          },
          { pending: 0, "in-progress": 0, completed: 0 }
        );
        allUsersStats[u.username] = {
          role: u.role,
          email: u.email,
          totalTasks: userTasks.length,
          tasksByStatus: userTasksByStatus,
        };
      }
    }

    return {
      ok: true,
      status: 200,
      data: {
        totalTasks,
        tasksByStatus,
        ...(isManager ? { allUsersStats } : {}),
      },
    };
  }

  return {
    ok: false,
    status: 404,
    data: { message: "Endpoint not found" },
  };
}

/**
 * Smart API requester:
 * - If token is a demo token (`demo_jwt_*`) or local mode is active, serves immediately from the rich local DB with a tiny realistic transition delay.
 * - Otherwise attempts the remote Render backend (`API_BASE_URL`) with a 3.5s timeout and falls back gracefully to the local DB if the remote server is sleeping or offline.
 */
export async function smartApiRequest(path, options = {}) {
  const authHeader = options.headers?.Authorization || options.headers?.authorization || "";
  const isDemoToken = authHeader.includes("demo_jwt_");
  const preferLocal = localStorage.getItem("pulsetask_mode") !== "remote_only";

  if (!isDemoToken && !preferLocal) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 3500);
      const res = await fetch(`${API_BASE_URL}${path}`, {
        ...options,
        signal: controller.signal,
      });
      clearTimeout(timer);
      const contentType = res.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        const data = await res.json();
        return { ok: res.ok, status: res.status, data, source: "remote" };
      }
    } catch {
      // Fall through to local interactive engine
    }
  }

  // Small natural delay for tactile skeleton/spinner feel
  await new Promise((r) => setTimeout(r, 140));
  const localRes = handleLocalApiRequest(path, options);
  return { ...localRes, source: "interactive" };
}

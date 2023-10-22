export interface Repository {
  object: RepositoryObject
}

export interface RepositoryObject {
  entries: Entry[]
}

export interface Entry {
  type: "blob" | "tree"
  name: string
  path: string
  pathRaw: string
  object: {
    entries?: (Omit<Entry, "object">)[]
  }
}

export interface HonoContext {
  Bindings: {
    GITHUB_TOKEN: string
    WORKER_ENV: string
  }
}

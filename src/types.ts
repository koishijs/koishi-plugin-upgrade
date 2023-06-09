export interface Latest {
    url: string
    assets_url: string
    upload_url: string
    html_url: string
    id: number
    author: Author
    node_id: string
    tag_name: string
    target_commitish: string
    name: string
    draft: boolean
    prerelease: boolean
    created_at: string
    published_at: string
    assets: any[]
    tarball_url: string
    zipball_url: string
    body: string
    discussion_url: string
    reactions: Reactions
}

interface Author {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
}

interface Reactions {
    url: string
    total_count: number
    "+1": number
    "-1": number
    laugh: number
    hooray: number
    confused: number
    heart: number
    rocket: number
    eyes: number
}

/**
 * Registry type for npmjs
 */
export interface Registry {
    _id: string
    _rev: string
    name: string
    "dist-tags": DistTags
    versions: Record<string, string>
    time: Record<string, string>
    maintainers: Maintainer[]
    author: RegistryAuthor
    license: string
    readme: string
    readmeFilename: string
    homepage: string
    description: string
    keywords: string[]
    [x: string]: any
}

export interface DistTags {
    latest: string
    next: string
}

export interface RegistryAuthor {
    name: string
    email: string
}

export interface Maintainer {
    name: string
    email: string
}

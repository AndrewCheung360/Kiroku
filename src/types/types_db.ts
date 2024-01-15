export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      anime: {
        Row: {
          cover_image: string | null
          created_at: string
          demographics: string[] | null
          episodes: number | null
          genres: string[] | null
          id: number
          mal_score: number | null
          mal_scored_by: number | null
          mal_url: string | null
          start_season: string | null
          start_year: number | null
          status: string | null
          studios: string | null
          synopsis: string | null
          themes: string[] | null
          title: string | null
          title_synonyms: string[] | null
          tracking: number | null
          trailer_url: string | null
          type: string | null
          updated_at: string | null
        }
        Insert: {
          cover_image?: string | null
          created_at?: string
          demographics?: string[] | null
          episodes?: number | null
          genres?: string[] | null
          id?: number
          mal_score?: number | null
          mal_scored_by?: number | null
          mal_url?: string | null
          start_season?: string | null
          start_year?: number | null
          status?: string | null
          studios?: string | null
          synopsis?: string | null
          themes?: string[] | null
          title?: string | null
          title_synonyms?: string[] | null
          tracking?: number | null
          trailer_url?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          cover_image?: string | null
          created_at?: string
          demographics?: string[] | null
          episodes?: number | null
          genres?: string[] | null
          id?: number
          mal_score?: number | null
          mal_scored_by?: number | null
          mal_url?: string | null
          start_season?: string | null
          start_year?: number | null
          status?: string | null
          studios?: string | null
          synopsis?: string | null
          themes?: string[] | null
          title?: string | null
          title_synonyms?: string[] | null
          tracking?: number | null
          trailer_url?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      manga: {
        Row: {
          authors: Json[] | null
          chapters: number | null
          cover_image: string | null
          created_at: string
          demographics: string[] | null
          genres: string[] | null
          id: number
          mal_score: number | null
          mal_scored_by: number | null
          mal_url: string | null
          serializations: string[] | null
          status: string | null
          synopsis: string | null
          themes: string[] | null
          title: string | null
          title_synonyms: string[] | null
          tracking: number | null
          type: string | null
          updated_at: string | null
          volumes: number | null
        }
        Insert: {
          authors?: Json[] | null
          chapters?: number | null
          cover_image?: string | null
          created_at?: string
          demographics?: string[] | null
          genres?: string[] | null
          id?: number
          mal_score?: number | null
          mal_scored_by?: number | null
          mal_url?: string | null
          serializations?: string[] | null
          status?: string | null
          synopsis?: string | null
          themes?: string[] | null
          title?: string | null
          title_synonyms?: string[] | null
          tracking?: number | null
          type?: string | null
          updated_at?: string | null
          volumes?: number | null
        }
        Update: {
          authors?: Json[] | null
          chapters?: number | null
          cover_image?: string | null
          created_at?: string
          demographics?: string[] | null
          genres?: string[] | null
          id?: number
          mal_score?: number | null
          mal_scored_by?: number | null
          mal_url?: string | null
          serializations?: string[] | null
          status?: string | null
          synopsis?: string | null
          themes?: string[] | null
          title?: string | null
          title_synonyms?: string[] | null
          tracking?: number | null
          type?: string | null
          updated_at?: string | null
          volumes?: number | null
        }
        Relationships: []
      }
      user_anime: {
        Row: {
          anime_id: number
          created_at: string
          episodes: number | null
          notes: string | null
          score: number | null
          status: string | null
          tags: string[] | null
          user_id: string
        }
        Insert: {
          anime_id: number
          created_at?: string
          episodes?: number | null
          notes?: string | null
          score?: number | null
          status?: string | null
          tags?: string[] | null
          user_id: string
        }
        Update: {
          anime_id?: number
          created_at?: string
          episodes?: number | null
          notes?: string | null
          score?: number | null
          status?: string | null
          tags?: string[] | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_anime_anime_id_fkey"
            columns: ["anime_id"]
            isOneToOne: false
            referencedRelation: "anime"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_anime_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      user_manga: {
        Row: {
          chapters: number | null
          created_at: string
          manga_id: number
          notes: string | null
          score: number | null
          status: string | null
          tags: string[] | null
          user_id: string
        }
        Insert: {
          chapters?: number | null
          created_at?: string
          manga_id: number
          notes?: string | null
          score?: number | null
          status?: string | null
          tags?: string[] | null
          user_id: string
        }
        Update: {
          chapters?: number | null
          created_at?: string
          manga_id?: number
          notes?: string | null
          score?: number | null
          status?: string | null
          tags?: string[] | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_manga_manga_id_fkey"
            columns: ["manga_id"]
            isOneToOne: false
            referencedRelation: "manga"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_manga_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          email: string | null
          id: string
          name: string | null
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          email?: string | null
          id: string
          name?: string | null
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          email?: string | null
          id?: string
          name?: string | null
          updated_at?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never

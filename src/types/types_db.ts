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
      chapters: {
        Row: {
          chapter_num: number | null
          chapter_path: string | null
          created_at: string
          id: number
          manga_id: number | null
        }
        Insert: {
          chapter_num?: number | null
          chapter_path?: string | null
          created_at?: string
          id?: number
          manga_id?: number | null
        }
        Update: {
          chapter_num?: number | null
          chapter_path?: string | null
          created_at?: string
          id?: number
          manga_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "chapters_manga_id_fkey"
            columns: ["manga_id"]
            isOneToOne: false
            referencedRelation: "manga"
            referencedColumns: ["id"]
          }
        ]
      }
      manga: {
        Row: {
          authors: Json[] | null
          cover_image: string | null
          created_at: string
          demographics: string[] | null
          genres: string[] | null
          id: number
          score: number | null
          scored_by: number | null
          status: string | null
          synopsis: string | null
          themes: string[] | null
          title: string | null
          tracking: number | null
          type: string | null
          updated_at: string | null
        }
        Insert: {
          authors?: Json[] | null
          cover_image?: string | null
          created_at?: string
          demographics?: string[] | null
          genres?: string[] | null
          id?: number
          score?: number | null
          scored_by?: number | null
          status?: string | null
          synopsis?: string | null
          themes?: string[] | null
          title?: string | null
          tracking?: number | null
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          authors?: Json[] | null
          cover_image?: string | null
          created_at?: string
          demographics?: string[] | null
          genres?: string[] | null
          id?: number
          score?: number | null
          scored_by?: number | null
          status?: string | null
          synopsis?: string | null
          themes?: string[] | null
          title?: string | null
          tracking?: number | null
          type?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      tracked_manga: {
        Row: {
          created_at: string
          last_chap_read: number | null
          manga_id: number
          status: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          last_chap_read?: number | null
          manga_id: number
          status?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          last_chap_read?: number | null
          manga_id?: number
          status?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tracked_manga_manga_id_fkey"
            columns: ["manga_id"]
            isOneToOne: false
            referencedRelation: "manga"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tracked_manga_user_id_fkey"
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
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
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

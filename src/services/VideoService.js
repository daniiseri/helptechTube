import { createClient } from "@supabase/supabase-js"

const SUPABASE_URL = 'https://fucyekeibwaoniehqkii.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1Y3lla2VpYndhb25pZWhxa2lpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA5OTYyOTIsImV4cCI6MTk5NjU3MjI5Mn0.d-ceEiVpzkqVP1f81OJziM9XbPdiPxIEVaGxmRBiCeE';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export function VideoService() {

  function listen(pushItem) {
    return supabase
      .channel('any')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'video' }, payload => {
        pushItem(payload);
      })
      .subscribe()
  }

  function create(data) {
    return supabase
      .from('video')
      .insert(data)
  }

  function getAllVideo() {
    return supabase
      .from('video')
      .select('*')
  }

  return {
    getAllVideo,
    create,
    listen
  }
}
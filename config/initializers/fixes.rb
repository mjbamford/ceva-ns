# Don't show listen gem's errors messages on node_modules
# See https://github.com/rails/rails/issues/32700
module ActiveSupport
  class EventedFileUpdateChecker
    def directories_to_watch
      dtw = @files.map { |f| @ph.existing_parent(f) } + @dirs.keys.select(&:exist?)
      dtw.compact!
      dtw.uniq!

      normalized_gem_paths = Gem.path.map { |path| File.join path, "" }
      dtw = dtw.reject do |path|
        normalized_gem_paths.any? { |gem_path| path.to_s.start_with?(gem_path) }
      end

      @ph.filter_out_descendants(dtw)
    end
  end
end

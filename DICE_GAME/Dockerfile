FROM ubuntu:latest
LABEL "Author"="Timi"
LABEL "Project"="DICE"

ENV DEBIAN_FRONTEND=noninteractive

# Update system and install necessary packages
RUN apt update && apt install -y apache2 apache2-utils

# Set working directory
WORKDIR /var/www/html

# Copy website files to Apache root directory
COPY . /var/www/html

# Set the correct permissions
RUN chmod -R 755 /var/www/html

# Expose port 80 for Apache
EXPOSE 80

# Start Apache in the foreground
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]

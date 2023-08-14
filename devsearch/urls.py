from django.contrib import admin
from django.urls import path, include
from django.conf import settings
#Static is basically going to help us create a new url for our static files
from django.conf.urls.static import static

from django.contrib.auth import views as auth_views


urlpatterns = [
    path('admin/', admin.site.urls),
    path('projects/', include('projects.urls')),
    path('', include('users.urls')),
    path('api/', include('api.urls')),

#     path('reset_password/', auth_views.PasswordResetView.as_view(), 
#          name='reset_password'),
#     path('reset_password_sent/', auth_views.PasswordResetDoneView.as_view(), 
#          name='password_reset_done'),
#     path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(),
#          name='password_reset_confirm'),
#     path('reset_password_complete/', auth_views.PasswordResetCompleteView.as_view(),
#          name='password_reset_complete'),
]

# We need to add a path to find those uploaded images
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# When debug is false django looks for staticfiles
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


# 1 - User submits email for reset            //PasswordResetView.as_view
# 2 - Email sent message                      //PasswordResetDoneView.as_view
# 3 - Email with link and reset instructions  //PasswordResetConfirmView.as_view
# 4 - Password successfully reset message     //PasswordResetCompleteView.as_view